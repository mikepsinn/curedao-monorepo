import React from 'react';
import { render } from '@testing-library/react';
import NutritionFactsLabel from './NutritionFactsLabel';

describe('NutritionFactsLabel component', () => {
  it('should render the component with correct food items', () => {
    const sampleData = [
      {
        foodName: 'Apple',
        servingSize: '1 medium',
        calories: 95,
        totalFat: 0.3,
        saturatedFat: 0.1,
        transFat: 0,
        cholesterol: 0,
        sodium: 1,
        totalCarbohydrate: 25,
        dietaryFiber: 4.4,
        sugars: 19,
        protein: 0.5,
        vitaminA: 1,
        vitaminC: 14,
        calcium: 1,
        iron: 1,
      },
    ];

    const { getByText } = render(<NutritionFactsLabel data={sampleData} />);

    expect(getByText('Apple')).toBeInTheDocument();
    expect(getByText('1 medium')).toBeInTheDocument();
    expect(getByText('95')).toBeInTheDocument();
  });

  it('should render the component with correct macronutrients', () => {
    const sampleData = [
      {
        foodName: 'Banana',
        servingSize: '1 large',
        calories: 121,
        totalFat: 0.4,
        saturatedFat: 0.1,
        transFat: 0,
        cholesterol: 0,
        sodium: 1,
        totalCarbohydrate: 31,
        dietaryFiber: 3.5,
        sugars: 17,
        protein: 1.5,
        vitaminA: 1,
        vitaminC: 17,
        calcium: 1,
        iron: 2,
      },
    ];

    const { getByText } = render(<NutritionFactsLabel data={sampleData} />);

    expect(getByText('Total Fat 0.4g')).toBeInTheDocument();
    expect(getByText('Saturated Fat 0.1g')).toBeInTheDocument();
    expect(getByText('Trans Fat 0g')).toBeInTheDocument();
    expect(getByText('Cholesterol 0mg')).toBeInTheDocument();
    expect(getByText('Sodium 1mg')).toBeInTheDocument();
    expect(getByText('Total Carbohydrate 31g')).toBeInTheDocument();
    expect(getByText('Dietary Fiber 3.5g')).toBeInTheDocument();
    expect(getByText('Sugars 17g')).toBeInTheDocument();
    expect(getByText('Protein 1.5g')).toBeInTheDocument();
  });

  it('should render the component with correct micronutrients', () => {
    const sampleData = [
      {
        foodName: 'Orange',
        servingSize: '1 medium',
        calories: 62,
        totalFat: 0.2,
        saturatedFat: 0,
        transFat: 0,
        cholesterol: 0,
        sodium: 0,
        totalCarbohydrate: 15,
        dietaryFiber: 3.1,
        sugars: 12,
        protein: 1.2,
        vitaminA: 4,
        vitaminC: 88,
        calcium: 5,
        iron: 1,
      },
    ];

    const { getByText } = render(<NutritionFactsLabel data={sampleData} />);

    expect(getByText('Vitamin A 4%')).toBeInTheDocument();
    expect(getByText('Vitamin C 88%')).toBeInTheDocument();
    expect(getByText('Calcium 5%')).toBeInTheDocument();
    expect(getByText('Iron 1%')).toBeInTheDocument();
  });
});