export const AccountSetupMock = {
    personalInformation: [
      {
        type: 'text',
        name: 'firstName',
        hasLabel: false,
        placeholder: 'First Name',
        required: true,
      },
      {
        type: 'text',
        name: 'lastName',
        hasLabel: false,
        placeholder: 'Last Name',
        required: true,
      },
      {
        type: 'email',
        name: 'email',
        hasLabel: false,
        placeholder: 'Email Address',
        required: true,
      },
      {
        type: 'password',
        name: 'password',
        placeholder: 'Password',
        hasLabel: false,
        minLength: 1,
        required: true,
        isInputGroup: true,
        inputGroupText: 'show',
      },
    ],
    interests: [
        {
            name: 'Art',
            image: 'assets/images/auth/artImage.jpg',
            id: 1
        },
        {
            name: 'News',
            image: 'assets/images/auth/newsImage.jpg',
            id: 2
        },
        {
            name: 'Society',
            image: 'assets/images/auth/societyImage.jpg',
            id: 3
        },
        {
            name: 'Business',
            image: 'assets/images/auth/businessImage.jpg',
            id: 4
        },
    ]
};
