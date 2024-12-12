import { ref } from 'vue';
const profileTemp=ref({
    model:false,
    id:0,
    username:'hossein',
    email:'hossein@gmail.com',
    avatar:'images/avatar.png',
    newAvatar:undefined,
    password:'',
    role:'user'
});
export {profileTemp};