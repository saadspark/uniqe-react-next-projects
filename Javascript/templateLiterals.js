//TemplateLiterals are represented by ``
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
const {first_name,date,branch_id}=obj;

const show = `${first_name} is my best friend which is
 ${3+19} year old from branch=${branch_id} year was born on
 ${date.split('-')[0]}`;
show;