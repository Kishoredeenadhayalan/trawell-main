export const sendEnquiryRequest = async (data: any) =>
  fetch("/api/sendEmail", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((res) => {
    if (res.status === 200) {
      console.log("res", res);
      return res.json();
    } else {
      throw new Error("Something went wrong");
    }
  });
