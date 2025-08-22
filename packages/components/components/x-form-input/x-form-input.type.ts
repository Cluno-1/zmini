
import type { ExtractPropTypes, PropType} from 'vue'

export type labelFontWeightType='normal' | 'bold'

export const formInputProps={
		label:{
			type:String,
			default:''
		},
		modelValue:{
			type:[String, Number],
			default:''
		},
		rule:{
			type:String,
			default:''
		},
		disabled:{
			type:Boolean,
			default:false
		},
		bottomLine:{
			type:Boolean,
			default:false
		},
		errorMessage:{
			type:String,
			default:''
		},
		textarea:{
			type:Boolean,
			default:false,
		},
		required:{
			type:Boolean,
			default:false,
		},
		placeholder:{
			type:String,
			default:''
		},
		type:{
			type:String,
			default:'text'
		}
		
	}


//props类型
export type formInputPropsType = ExtractPropTypes<typeof formInputProps>