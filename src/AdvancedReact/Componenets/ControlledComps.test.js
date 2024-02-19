import { fireEvent, screen, render } from "@testing-library/react";
import { ControlledComps } from "./ControlledComps";

describe("Testing Controlled Comps form", () =>
{
    test("Feedback is disabled on conditions", () =>
    {
        const handleSubmit = jest.fn();
        render(<ControlledComps onSubmit={handleSubmit}/>);

        const rangeINput = screen.getByLabelText(/Score : /);
        fireEvent.change(rangeINput, { target : { value : 4}});

        const submitBUtton = screen.getAllByText("Submit Feedback !")[0];
        fireEvent.click(submitBUtton);

        expect(handleSubmit).not.toHaveBeenCalled();
        expect(submitBUtton).toHaveAttribute("disabled");

    })
})