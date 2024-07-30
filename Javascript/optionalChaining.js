const data = [
    {
        "id": 41,
        "uid": "Lhr-2304-1",
        "branch_id": 31,
        "first_name": "Hassan",
        "last_name": "Awan",
        "identification_type": "Cnic",
        "identification_number": "69852-1456321-1",
        "email": "",
        "phone": "+923476995122",
        "gender": "Male",
        "image": "https://api.vostro-new.com/public/images/Clients/6440cc75282fb_Test.png",
        "city": "Test",
        "address": "Address",
        "country": "Pakistan",
        "postal_code": "11111",
        "date": "2023-04-20",
        "status": "1",
        "birthday": "2023-04-05",
        "branches_name": "Lahore Branch",
        "number": 0,
        "membership_type": [
            {
                "client_id": 41,
                "package_id": 7,
                "category": "6",
                "get_package_name": {
                    "count": 7,
                    "name": "Elite"
                },
                "get_package_name31": {
                    "count": 7,
                    "name": "Elite"
                }
            }
        ]
    }
    ];

//IT WILL CHECK ? AND GIVE UNDEFINE ?? IT SET WALUE
 const value = () => 
 (data[0].membership_type[0].get_package_name?.count ?? 0)  
 +
(data[0].membership_type[0]?.get_package_name2?.count ?? 0);
 console.log(value());