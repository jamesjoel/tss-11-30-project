import * as YUP from 'yup'

let CateSchema = YUP.object({
    title : YUP.string().required(" ")
})

export default CateSchema