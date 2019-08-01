import { TableProps } from "react-table";
import ThemeProps from "../../theme/Theme.props";
export default interface TableProps extends ThemeProps, TableProps {
    compact?: boolean;
    simple?: boolean;
}
