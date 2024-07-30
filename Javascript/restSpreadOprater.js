const data = [
    'saad',
    'ali',
    'usman',
    'kamal'
];
const obj =          
 {
    "id": 39,
    "uid": "Tes-2304-7",
    "branch_id": 30,
    "first_name": "test",
    "last_name": "six",
    "identification_type": "Cnic",
    "identification_number": "38403-3665555-5",
    "email": "test@gmail.com",
    "phone": "+929292012349",
    "gender": "Male",
    "image": "https://api.vostro-new.com/public/images/Clients/6448b170b2994_windows-11-windows-10-minimalism-hd-w",
    "city": "",
    "address": "",
    "country": "",
    "postal_code": "",
    "date": "2023-04-19",
    "status": "1",
    "birthday": "0000-00-00",
    "branches_name": "Test",
    "number": 0,
    "membership_type": [],
    "active_packages": []
};
//rest Opreate Store value in variable and other in seprate
const [fname,lname , ...other] = data;
other;

//spread will add new value at the end 
const newData = [...data,'ladla'];
newData;

//add new object
const newObj = 
{...obj,
    //it add new object
    class:'ssss',
    //it update exiting 
    "first_name": "testsdd"                                  
 };
newObj;