import React from 'react'
import { shallow } from 'enzyme';
import { renderer } from 'react-test-renderer';
import { FoodCard } from './index';
import { StyledCard, FlexDiv, StyledCardMedia, CardContent, 
    TypographyTitle, RequestQuantityWrapper,  TypographyDescription, 
    TypographyValue, TypographyButtonText, AddRequestButton } 
from './styled';

const mockFoodInfo = {
    amount: 0,
    id: 1,
    photoUrl: "photo",
    name: "name",
    description: "description",
    price: 0,
}

describe("Request", () => {
    it.skip("Add Request", () => {
        const mockAddRequestFunction = jest.fn();
        
        const component = shallow(
            <FoodCard 
                foodInfo={mockFoodInfo} 
                onClickAddRequestButton={mockAddRequestFunction}
            />
        );
        const addRequestButton = component.find(AddRequestButton);
        
        
        expect(AddRequestButton).toHaveLength(1);
        addRequestButton.simulate('click');
        expect(mockAddRequestFunction).toHaveBeenCalled()
    })

    it.skip("Data flow", () => {
        const component = shallow(<FoodCard foodInfo={mockFoodInfo} />);
        const foodImage = component.find(StyledCardMedia);
        const foodTitle = component.find(TypographyTitle);
        const foodDescription = component.find(TypographyDescription);
        const foodPrice = component.find(TypographyValue);
        const requestButton = component.find(AddRequestButton);
        const buttonText = component.find(TypographyButtonText);

        expect(foodImage.props().image).toBe(mockFoodInfo.photoUrl);
        expect(foodTitle.props().children).toBe(mockFoodInfo.name);
        expect(foodDescription.props().children).toBe(mockFoodInfo.description);
        expect(foodPrice.props().children).toBe(mockFoodInfo.price);
        expect(requestButton.props().borderColor).toBe(mockFoodInfo.amount);
        expect(buttonText.props().children).toBe(mockFoodInfo.amount);
    })
})