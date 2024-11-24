import {
    Paper,
    TextInput,
    PasswordInput,
    Checkbox,
    Button,
    Title,
    Text,
    Anchor,
  } from '@mantine/core';
  import classes from '/resources/css/Login.module.css';
  import { useForm } from '@mantine/form';
import axios from 'axios';
import { router } from '@inertiajs/react';



export default function Login() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
      password: '',
      keepLoggedIn: false
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) => (value !== '' ? null : 'Password needs to be filled'),
    },
  });

  const login = (values: { email: string; password: string}) => {
    axios.post(route('login'), {
      email: values.email,
      password: values.password
    })
    .then(function (response) {
      console.log(response);
      window.location.href = '/blogs';
    })
    .catch(function (error) {
      console.warn("Account does not exist");
    });
  }

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
          Welcome back to Inerjaja
        </Title>
        <form onSubmit={form.onSubmit((values) => login(values))}>
          <TextInput 
            label="Email address" 
            placeholder="hello@gmail.com" 
            size="md" 
            key={form.key('email')}
            {...form.getInputProps('email')}/>

          <PasswordInput 
            label="Password" 
            placeholder="Your password" 
            mt="md" 
            size="md"
            key={form.key('password')}
            {...form.getInputProps('password')}
          />
          <Checkbox label="Keep me logged in" mt="xl" size="md" />
          <Button type='submit' fullWidth mt="xl" size="md">
            Login
          </Button>
        </form>



        <Text ta="center" mt="md">
          Don&apos;t have an account?{' '}
          <Anchor<'a'> href="#" fw={700} onClick={(event) => event.preventDefault()}>
            Register
          </Anchor>
        </Text>
      </Paper>
    </div>
  );
}