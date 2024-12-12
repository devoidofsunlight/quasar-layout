import {ref} from 'vue';
const columns:any[]=[
    {name:'id',align:'left',label:'ID',field:'id',sortable:true},
    {name:'title',align:'center',label:'Title',field:'title',sortable:true},
    {name:'description',align:'center',label:'Description',field:'description',sortable:true,format:(val:string)=>{val.slice(0,40)}},
];
const rows=ref([
    {
        id:1,
        image:'images/mountains.jpg',
        title:'Fake',
        desciption:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap',
    },
    {
        id:2,
        image:'images/mountains.jpg',
        title:'Fake',
        desciption:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap',
    }
]);
const pagination = ref({
    sortBy:'desc',
    descending:true,
    page:1,
    RowPerPage:5,
    rowNumber:100
});
export{columns,rows,pagination}