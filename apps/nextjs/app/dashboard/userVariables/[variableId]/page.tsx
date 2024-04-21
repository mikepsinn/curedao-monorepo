import { Metadata } from "next"
import { redirect } from "next/navigation"

import { authOptions } from "@/lib/auth"
import { getCurrentUser } from "@/lib/session"
import { Shell } from "@/components/layout/shell"
import { UserVariableOverview } from "@/components/userVariable/user-variable-overview";
import { render, screen } from '@testing-library/react';

jest.mock('@/lib/session', () => ({
  getCurrentUser: jest.fn(),
}));

jest.mock('@/lib/api/userVariables', () => ({
  getUserVariable: jest.fn(),
}));

interface UserVariablePageProps {
  params: { variableId: number }
  searchParams: { from: string; to: string }
}

// export async function generateMetadata({
//   params,
// }: UserVariablePageProps): Promise<Metadata> {
//   const user = await getCurrentUser()
//
//   if (!user) {
//     redirect(authOptions?.pages?.signIn || "/signin")
//   }
//   const response = await fetch(`/api/dfda/userVariables?variableId=${params.variableId}&includeCharts=0`);
//   const userVariables = await response.json();
//   const userVariable = userVariables[0];
//
//   return {
//     title: userVariable?.name || "Not Found",
//     description: userVariable?.description,
//   }
// }

export default async function UserVariablePage({
  params,
  searchParams,
}: UserVariablePageProps) {
  const user = await getCurrentUser()

  if (!user) {
    redirect(authOptions?.pages?.signIn || "/signin")
  }

  return (
    <Shell>
      <UserVariableOverview variableId={params.variableId} user={user} measurementsDateRange={{
        from: searchParams.from,
        to: searchParams.to
      }} />
    </Shell>
  )
}

describe('UserVariablePage', () => {
  it('passes the correct measurementsDateRange to UserVariableOverview based on searchParams', async () => {
    const searchParams = { from: '2023-01-01', to: '2023-12-31' };
    render(<UserVariablePage params={{variableId: 1}} searchParams={searchParams} />);
    
    expect(screen.getByTestId('user-variable-overview')).toHaveAttribute(
      'measurementsDateRange', 
      JSON.stringify(searchParams)
    );
  });

  it('redirects if user is not authenticated', async () => {
    getCurrentUser.mockResolvedValueOnce(null);
    render(<UserVariablePage params={{variableId: 1}} searchParams={{}} />);
    
    expect(redirect).toHaveBeenCalledWith('/signin');
  });

  it('fetches the correct variable data based on variableId', async () => {
    const variableId = 1;
    const variable = { id: variableId, name: 'Test Var' };
    getUserVariable.mockResolvedValueOnce(variable);

    render(<UserVariablePage params={{variableId}} searchParams={{}} />);

    expect(getUserVariable).toHaveBeenCalledWith(variableId);
    expect(await screen.findByTestId('user-variable-overview')).toHaveAttribute(
      'variableId',
      variableId
    );
  });
});
