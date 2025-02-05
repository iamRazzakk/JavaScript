// ** Problem one: Destructuring an object's properties**

const user = {
    name: "Rakib",
    age: 24,
    address: {
        city: "Dhaka",
        zip: 1207,
        geo: {
            lat: 23.8103,
            lng: 90.4125
        }
    }
};

// 🚀 Task: "geo" theke "lat" and "lng" destructure kore print koro

const { address: { geo: { lat, lng } } } = user
// console.log(lat, lng);

// ** Problem Two
const product = {
    id: 101,
    title: "MERN Stack Course",
    price: 4999,
    details: {
        instructor: "Rakib",
        duration: "3 months"
    }
};

// 🚀 Task: "details" theke "instructor" destructure kore function e use koro

const { details: { instructor } } = product
const myFnc = (instructor) => {
    // console.log(instructor);
}
myFnc(instructor)



// ** Problem three
const scores = [85, 90, 78, 92, 88, 76, 95];

// 🚀 Task: Prothom 2 ta score alada kore destructure koro, baki gula ekta array te rekhe print koro
const [firstOne, secondOne, ...total] = scores
// console.log(firstOne, secondOne, total);

// ** Problem Four
const settings = {
    theme: "dark",
    language: "en"
};

// 🚀 Task: "mode" destructure koro, jodi thake tahole niye nao, na thakle "default mode" set koro
const { mode } = settings
const finalMode = mode ? mode : "Default mode"
console.log(finalMode);