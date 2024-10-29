import "@testing-library/jest-dom";

import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import LoginSignup from "./LoginSignup";

// Test case for rendering the component
test("renders LoginSignup form with input fields and buttons", () => {
  render(<LoginSignup />);

  // Check if the "Sign Up" header is rendered
  expect(screen.getByText("Sign Up")).toBeInTheDocument();

  expect(screen.getByPlaceholderText("Username")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Confirm Password")).toBeInTheDocument();

  expect(screen.getByText("Sign Up")).toBeInTheDocument();
  expect(screen.getByText("Login")).toBeInTheDocument();
});

// Test case for filling out the form and checking input value changes
test("allows the user to input and submit form data", () => {
  render(<LoginSignup />);

  // Simulate user typing in the fields
  fireEvent.change(screen.getByPlaceholderText("Username"), {
    target: { value: "testuser" },
  });
  fireEvent.change(screen.getByPlaceholderText("Email"), {
    target: { value: "test@example.com" },
  });
  fireEvent.change(screen.getByPlaceholderText("Password"), {
    target: { value: "password123" },
  });
  fireEvent.change(screen.getByPlaceholderText("Confirm Password"), {
    target: { value: "password123" },
  });

  // Assert that the input values have changed
  expect(screen.getByPlaceholderText("Username").value).toBe("testuser");
  expect(screen.getByPlaceholderText("Email").value).toBe("test@example.com");
  expect(screen.getByPlaceholderText("Password").value).toBe("password123");
  expect(screen.getByPlaceholderText("Confirm Password").value).toBe(
    "password123"
  );
});

// Test case for password mismatch
test("displays error when passwords do not match", () => {
  render(<LoginSignup />);

  // Simulate user entering mismatching passwords
  fireEvent.change(screen.getByPlaceholderText("Password"), {
    target: { value: "password123" },
  });
  fireEvent.change(screen.getByPlaceholderText("Confirm Password"), {
    target: { value: "differentPassword" },
  });

  // Simulate form submission
  fireEvent.click(screen.getByText("Sign Up"));

  // Check if the alert is called (mocking alert for testing)
  jest.spyOn(window, "alert").mockImplementation(() => {});
  expect(window.alert).toHaveBeenCalledWith("Passwords do not match");
});
