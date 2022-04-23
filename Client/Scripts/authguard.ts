/*
File Name : authguard
Student Name : Devin Dodampe
Student ID : 100798520
Date : April 23, 2022 
*/
"use strict";
((function()
{
    let protected_routes: string[] = [
        "contact-list"
    ];


    if(protected_routes.indexOf(router.ActiveLink) > -1)
    {
        // check if user is logged in
        if(!sessionStorage.getItem("user"))
        {
            // if not...redirect them back to the login page
            location.href = "/login";
        }
    }
   
}))();