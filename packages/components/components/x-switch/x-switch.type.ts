
import type { ExtractPropTypes, PropType} from 'vue'



export const switchProps={
		size:{
			type:String || Number,
			default:'20'
		},
		disabled:{
			type: Boolean,
			default:false,
		},
		activeColor:{
			type: String,
			default:'#235BF7',
		},
		inactiveColor:{//没选中状态颜色
			type: String,
			default:'#D3D3D3',
		},
		value:{
			type: [String,Boolean] as PropType<boolean | string>,
			default:'',
		},
		activeText:{
			type: String,
			default:'',
		},
		inactiveText:{
			type: String,
			default:'',
		},
		
		
		
	} as const


//props类型
export type switchPropsType = ExtractPropTypes<typeof switchProps>