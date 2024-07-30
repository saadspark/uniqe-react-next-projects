const data = [
    {
        "id": 3,
        "uid": "Lhr-2304-1",
        "branch_id": 31,
        "first_name": "Hassan",
        "last_name": "Maaz",
        "identification_type": "Cnic",
        "identification_number": "38403-3965211-1",
        "email": "sparksolutionz911@gmail.com",
        "phone": "+923456999998",
        "gender": "Male",
        "image": "https://api.vostro-new.com/public/images/Clients/643ce821a77f4_Test.png",
        "city": "SGD",
        "address": "Address",
        "country": "Pakistan",
        "postal_code": "11111",
        "date": "2023-04-17",
        "status": "1",
        "birthday": "1993-09-11",
        "branches_name": "Lahore Branch",
        "number": 0,
        "membership_type": [
            {
                "client_id": 3,
                "package_id": 7,
                "category": "6",
                "get_package_name": {
                    "id": 7,
                    "name": "Elite"
                }
            }
        ],
        "active_packages": [
            {
                "client_id": 3
            }
        ]
    },
    {
        "id": 22,
        "uid": "G13-2304-1",
        "branch_id": 1,
        "first_name": "Saad",
        "last_name": "Ali",
        "identification_type": "Cnic",
        "identification_number": "12312-3123131-3",
        "email": "ali@gmail.com",
        "phone": "+929230464573",
        "gender": "Male",
        "image": "",
        "city": "asdasd",
        "address": "test address",
        "country": "Pakistan",
        "postal_code": "4100",
        "date": "2023-04-18",
        "status": "1",
        "birthday": "0000-00-00",
        "branches_name": "G13",
        "number": 0,
        "membership_type": [],
        "active_packages": []
    }
];


// function addVlaue(id){
//    value = data.filter((arr) => arr.id === id);
//    return [...value,{
//     'song' : 'dur dur'
//    }]
// }

// function deleteVlaue(id){
//     value = data.filter((arr)=>arr.id != id);
//     return value;
//  }

 function updateVlaue(id){
    return data.map((arr)=>arr.id === id ? {...arr, first_name: "Saad121"} : arr);
 }

// console.log(addVlaue(22));

// console.log(deleteVlaue(3));

console.log(updateVlaue(3));