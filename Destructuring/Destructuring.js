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
    console.log(instructor);
}
myFnc(instructor)