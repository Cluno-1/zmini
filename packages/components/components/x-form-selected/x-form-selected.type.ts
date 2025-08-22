
import type { ExtractPropTypes, PropType} from 'vue'


export const formSelectedProps={
		label:{
			type:String,
			default:''
		},
		modelValue:{//展示给人看的值 可选之后展示的还是 options里面的name
			type:String,
			default:''
		},
		rule:{
			type:String,
			default:''
		},
		bottomLine:{
			type:Boolean,
			default:false
		},
		isSelected:{
			type:Boolean,
			default:false
		},
		options:{
			type:Array as PropType<{name:string|number,value:string|number}[]>,
			default:[{name:'无',value:''}]
		},
		dictName:{
			type:String,
			default:'',
		},
		required:{
			type:Boolean,
			default:false,
		},
		useSearch:{
			type:Boolean,
			default:true,
		}
	}


//props类型
export type formSelectedPropsType = ExtractPropTypes<typeof formSelectedProps>