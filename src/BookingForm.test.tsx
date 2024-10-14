import { act } from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import BookingForm from "./components/BookingForm";

// Mock window.alert
jest.spyOn(window, "alert").mockImplementation(() => {});

describe("BookingForm Component", () => {
  it("renders all form fields", () => {
    render(<BookingForm />);

    expect(screen.getByLabelText(/Lastname/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Guest\(s\)/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Time/i)).toBeInTheDocument();
  });

  it("shows error messages on invalid form submission", async () => {
    render(<BookingForm />);

    fireEvent.click(screen.getByRole("button", { name: /Reserve a table/i }));

    await waitFor(() => {
      expect(screen.getByText(/Lastname is required./i)).toBeInTheDocument();
      expect(screen.getByText(/Email is required./i)).toBeInTheDocument();
      expect(screen.getByText(/Date is required./i)).toBeInTheDocument();
      expect(screen.getByText(/Time is required./i)).toBeInTheDocument();
    });
  });

  it("submits the form successfully with valid data", async () => {
    render(<BookingForm />);

    fireEvent.change(screen.getByLabelText(/Lastname/i), {
      target: { value: "Doe" },
    });
    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: "doe@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/Guest\(s\)/i), {
      target: { value: "2" },
    });
    fireEvent.change(screen.getByLabelText(/Date/i), {
      target: { value: "2023-10-01" },
    });
    fireEvent.change(screen.getByLabelText(/Time/i), {
      target: { value: "18:30" },
    });

    await act(async () => {
      fireEvent.click(screen.getByRole("button", { name: /Reserve a table/i }));
    });

    // Since alert is not part of the DOM, we can't use findByText for the alert message
    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith(
        "Booking is successfully saved!"
      );
    });

    // Assert that form fields are reset after submission
    expect(screen.getByLabelText(/Lastname/i)).toHaveValue("");
    expect(screen.getByLabelText(/Email/i)).toHaveValue("");
    expect(screen.getByLabelText(/Guest\(s\)/i)).toHaveValue("1");
    expect(screen.getByLabelText(/Date/i)).toHaveValue("");
    expect(screen.getByLabelText(/Time/i)).toHaveValue("");
  });
});
