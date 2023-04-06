import { NextRequest, NextResponse } from "next/server";

// We will use zod and zod-form-data for server side validation
import { z } from "zod";
import { zfd } from "zod-form-data";

// We must create the schema first
const formDataInputSchema = zfd.formData({
  username: zfd.text(),
  password: zfd.text(z.string().min(6).max(16)),
});

export async function POST(request: NextRequest) {
  try {
    // What if we want to validate on server side?
    // Just parse it to the schema (formDataInputSchema)
    const validateInput = formDataInputSchema.safeParse(
      // Don't worry, this will be type safeti-ed by zfd
      await request.formData()
    );

    // TODO: Now we can do a lot of things here !
    if (!validateInput.success) {
      return NextResponse.json({
        statusCode: 400,
        error: validateInput.error,
      });
    } else {
      // We try to print the input to server console
      console.log(validateInput.data.username, validateInput.data.password);

      // Don't forget to use the "return"
      return NextResponse.json({
        statusCode: 200,
        data: "this_is_an_example_of_access_token",
      });
    }
  } catch (err) {
    console.log(err);
  }
}
