import * as YUP from 'yup'

let SubCateSchema = YUP.object({
    title : YUP.string().required(" "),
    cate_id : YUP.string().required(" ")
})

export default SubCateSchema