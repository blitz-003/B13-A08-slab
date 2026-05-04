"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { Router } from "next/router";
import { toast } from "react-toastify";

export default function SignUpPage() {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signUp.email({
      name,
      email,
      password,
      image,
    });

    console.log({ data, error });

    if (!error) {
      toast.success("Account created 🎉");

      setTimeout(() => {
        Router.push("/");
      }, 1000);
    } else {
      toast.error(error.message);
    }
  };

  return (
    <Card className="border mx-auto w-[90vw] md:w-[70vw] py-10 mt-5 max-w-xl">
      <h1 className="text-center text-2xl font-bold">Register</h1>

      <Form className="flex w-[95%] mx-auto flex-col gap-4" onSubmit={onSubmit}>
        <TextField
          isRequired
          name="name"
          type="text"
          validate={(value) => {
            if (value.length <= 0) {
              return "Please enter a name";
            }

            return null;
          }}
        >
          <Label>Name</Label>
          <Input placeholder="Enter your name" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          name="image"
          type="text"
          validate={(value) => {
            if (value.length <= 0) {
              return "Please enter an Image URL";
            }

            return null;
          }}
        >
          <Label>Image URL</Label>
          <Input placeholder="Image URL" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }

            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="john@example.com" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters with one uppercase letter and at least one number";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }

            return null;
          }}
        >
          <Label>Password</Label>
          <Input placeholder="Enter your password" />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-6">
            <Button type="submit" className="w-full">
              <Check />
              Submit
            </Button>
          </div>
          <div className="col-span-6">
            <Button type="reset" variant="secondary" className="w-full">
              Reset
            </Button>
          </div>
        </div>
      </Form>

      <Link href={"/login"} className="text-center text-blue-500 mt-4">
        Already have an account? Click to Log In
      </Link>
    </Card>
  );
}
