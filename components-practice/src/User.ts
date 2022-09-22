interface User{

    firstName: string;
    lastName:string;
    age:Number;
    sex: 'female' | 'male'; // the "|" symbole will let you separate as many values as you want
}

export default User;