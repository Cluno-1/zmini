
import type { ExtractPropTypes, PropType } from 'vue'

export interface checkMessageType {
		label:String,
		value:String,
	}


export const checkProps={
		show:{
			type:Boolean,
			default:false
		},
		title:{
			type:String,
			default:'100%'
		},
		data:{
			type: Array  as  PropType<checkMessageType[]>   ,
			default:[] as checkMessageType[]
		},

	} 


//props类型
export type checkPropsType = ExtractPropTypes<typeof checkProps>