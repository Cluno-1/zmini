
import { PropType, type ExtractPropTypes} from 'vue'

export interface xTagOptionType {
    createBy: string;
    createTime: string;
    cssClass: string;
    default: boolean;
    dictCode: number;
    dictLabel: string;                // value
    dictSort: number;                     
    dictType: string;
    dictValue: string;                // key
    isDefault: string;
    listClass: string;
    remark: string;
    status: string;
    updateBy: string;
    updateTime: string;
}

export const xTagProps={
		dictType:{
			type:String || null,
			default:null
		},
		options:{
			type:Array<xTagOptionType>,
			default:[]
		},
		type:{
			type:String,
			default:'primary'
		},
		value:{
			type:Number,
			default:-1
		},
		bgColor:{
			type:String,
			default:''
		},
		textColor:{
			type:String,
			default:''
		},
		showValue:{
			type:Boolean,
			default:false
		}
		
	}


//props类型
export type xTagPropsType = ExtractPropTypes<typeof xTagProps>