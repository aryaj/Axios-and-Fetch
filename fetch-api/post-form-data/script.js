document.getElementById("btn").addEventListener("click", makeRequest);

// Promise Then | Single Data

/* function makeRequest() {
  console.log("Button clicked");
  const propmiseObj = fetch("https://jsonplaceholder.typicode.com/posts/");
  console.log("propmiseObj", propmiseObj);
  propmiseObj
    .then((res) => {
      if (!res.ok) {
        throw Error(res.statusText);
      }
      console.log("res", res);
      return res.json();
    })
    .then((data) => {
      console.log(data);
      console.log(data.body);
      data.forEach(element => {
        console.log(element.body)
      });
    })
    .catch((error) => console.log(error));
} */

// Async and Await | Showing data

async function makeRequest(e) {
  e.preventDefault();
  try {
    console.log("Button clicked");
    const name = document.getElementById("name").value;
    const job = document.getElementById("job").value;
    console.log("name",name)
    const myInit = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ name: name, job: job }),
    };
    const res = await fetch("https://reqres.in/api/users", myInit);

    if (!res.ok) {
      throw Error(res.statusText);
    }
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
