
import type { ExtractPropTypes, PropType} from 'vue'


export type buttonColor='default'|'warning'|'info'|'plain'



export const buttonProps={
		name:{
			type:String,
			default:''
		},
		width:{
			type:String,
			default:'100%'
		},
		type:{
			type: String as PropType<buttonColor>,
			default:'default'
		},
		color:{
			type: String,
			default:''
		},
		size:{
			type: String as PropType<'default'|'mini'>,
			default:'default'
		},
		round:{//是否圆角
			type: Boolean,
			default:true
		}
		
		
	} as const


//props类型
export type buttonPropsType = ExtractPropTypes<typeof buttonProps>