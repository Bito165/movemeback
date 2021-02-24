export const Login = {
  loginFields: [
    {
      type: 'email',
      name: 'email',
      hasLabel: true,
      placeholder: 'johndoe@gmail.com',
      labelName: 'Email Address',
      minLength: 1,
      required: true,
      pattern: '^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$',
    },
    {
      type: 'password',
      name: 'password',
      hasLabel: true,
      placeholder: 'xxxxxxxxxxx',
      labelName: 'Password',
      minLength: 1,
      required: true,
      isInputGroup: true,
      inputGroupText: 'show',
    },
  ],
};
