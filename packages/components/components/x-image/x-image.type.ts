import type { ExtractPropTypes, PropType } from "vue";

export const imageProps = {
    modelValue: {
        type: [String, Array] as PropType<string | string[]>,
        default: "",
    },
    size: {
        type: String,
        default: "90",
    },
    showUpload: {
        type: Boolean,
        default: false,
    },
    // 是否启用预览功能
    preview: {
        type: Boolean,
        default: true,
    },
    // 上传限制
    limit: {
        type: Number,
        default: 10,
    },
    // 上传地址
    uploadUrl: {
        type: String,
        default: "",
    },
	authorization:{ //上传地址的header （如果需要）
		type: String,
		default: "",
	}
} as const;

// props 类型
export type imagePropsType = ExtractPropTypes<typeof imageProps>;
// import type { ExtractPropTypes, PropType} from 'vue'



// export const imageProps={
// 		src:{
// 			type:String || Array<string>,
// 			default:''
// 		},
// 		size:{
// 			type:String,
// 			default:'90'
// 		},
// 		showUpload:{
// 			type: Boolean,
// 			default:false
// 		},
// 		// 是否启用预览功能
// 		preview: {
// 			type: Boolean,
// 			default: true
// 		},
// 		// 预览时是否显示指示器（仅多图有效）
// 		showIndicator: {
// 		    type: Boolean,
// 		    default: true
// 		},
// 		uploadUrl:{
// 			type: String,
// 			default:''
// 		}
		
		
// 	} as const


// //props类型
// export type imagePropsType = ExtractPropTypes<typeof imageProps>