const { expect } = require('chai');
const { PrismaClient } = require('@prisma/client');
const { getOrCreateDfdaUser } = require('./getOrCreateUserExample');

describe('getOrCreateDfdaUser', () => {
  let prisma;

  beforeEach(async () => {  
    prisma = new PrismaClient();
    await prisma.users.deleteMany({}); // Clear db before each test
  });

  afterEach(async () => {
    await prisma.$disconnect();
  });

  it('should create a new user if one does not exist', async () => {
    const clientUserId = 123;
    
    const dfdaUser = await getOrCreateDfdaUser(clientUserId);

    expect(dfdaUser).to.be.an('object');
    expect(dfdaUser.id).to.be.a('number');
    expect(dfdaUser.clientUserId).to.equal(clientUserId);

    const dbUser = await prisma.users.findUnique({ where: { id: dfdaUser.id } });
    expect(dbUser.dfda_user_id).to.equal(dfdaUser.id);
    expect(dbUser.dfda_access_token).to.equal(dfdaUser.accessToken);
    // assert other user fields saved correctly
  });

  it('should return the existing user if one already exists', async () => {
    // test logic for returning existing user
  });

  it('should handle API errors gracefully', async () => {
    // test error handling by mocking API to return errors
  });

  // add more test cases to cover all scenarios
});