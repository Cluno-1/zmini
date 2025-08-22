export interface DataItem {
	title : string;
	value : string | number;
	unit ?: string;
}

export interface Props {
	leftImage ?: string;
	leftData : DataItem[];
	rightImage ?: string;
	rightData : DataItem[];
}