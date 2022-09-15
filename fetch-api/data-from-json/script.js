/* function makeRequest() {
  console.log("Button clicked");

  const propmiseObj = fetch("data.txt");
  console.log("propmiseObj", propmiseObj);
  propmiseObj
    .then((res) => {
      console.log(res);
      return res.text();
    })
    .then((data) => console.log(data));
} */

// Fetch api rejects only when there is network error, otherwise it will be resolved and will go in then block even in 404. Like in below data1.txt not exist, but promise is resoved. //

//  Promise Then | Error handling //

/* function makeRequest() {
  console.log("Button clicked");
  const propmiseObj = fetch("data.json");
  console.log("propmiseObj", propmiseObj);
  propmiseObj
    .then((res) => {
      if (!res.ok) {
        throw Error(res.statusText);
      }
      console.log("res", res);
      return res.json();
    })
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
} */

// Promise Then | Showing data in browser //

/* function makeRequest() {
  const propmiseObj = fetch("data.json");
  console.log("propmiseObj", propmiseObj);
  propmiseObj
    .then((res) => {
      if (!res.ok) {
        throw Error(res.statusText);
      }
      console.log(res);
      return res.json();
    })
    .then((data) => {
      console.log(data);
      document.getElementById("data1").innerHTML = data.name;
      document.getElementById("data2").innerHTML = data.roll;
    })
    .catch((error) => console.log(error));
}
 */
// Async and Await

/* async function makeRequest() {
  console.log("Button clicked");
  const res = await fetch("data.txt");
  console.log(res);
  const data = await res.text();
  console.log(data);
}
 */

// Async and Await | Error handling

/* async function makeRequest() {
  try {
    console.log("Button clicked");
    const res = await fetch("data1.txt");
    console.log(res);
    if (!res.ok) {
      throw Error(res.statusText);
    }
    const data = await res.text();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
} */

// Async and Await | Showing data

async function makeRequest() {
  try {
    console.log("Button clicked");
    const res = await fetch("data.json");
    console.log(res);
    if (!res.ok) {
      throw Error(res.statusText);
    }
    const data = await res.json();
    console.log(data);
    document.getElementById("data1").innerHTML = data.name;
    document.getElementById("data2").innerHTML = data.roll;
  } catch (error) {
    console.log(error);
  }
}

document.getElementById("btn").addEventListener("click", makeRequest);
