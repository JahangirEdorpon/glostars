import {makeStyles} from '@mui/styles';

export const headerStyles = makeStyles({
    root: {

    },

    header: {
        border: '1px solid red'
    },

    brandLogo: {
        border: "1px solid green",

        '& img': {
            width: 153,
        }
    },

    searchBar: {
        position: "relative",
        '& table': {
            width: "100%",
            background: '#D3D3D3',
            borderRadius: 20,

            '& td': {
                verticalAlign: "middle",

                '& *': {
                    verticalAlign: "middle",
                },

                '&:first-child': {
                    padding: "4px 10px",
                    textAlign: "center",
                },

                '&:nth-child(2)': {
                    padding: "4px 10px",
                    width: "100%",

                    '& input': {
                        width: '100%',
                        boxSizing: "border-box",
                        padding: '4px 0',
                        outline: 0,
                        border: 0,
                        background: "transparent",
                        marginTop: -2,
                        fontSize: 16,
                    }
                },

                '&:last-child': {
                    padding: "4px 10px",
                    textAlign: "center",
                    '& svg': {
                        marginTop: -6,
                        fontSize: 20,
                        cursor: "pointer",
                    }
                },
            }
        },
    },

    searchSuggestionBar: {
        position: "absolute",
        left: 0,
        right: 0,
        top: "100%",
        height: 200,
        background: "#ffffff",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        borderRadius: 4,
        overflow: "auto",

        '& .item': {
            padding: "4px 10px",


        },

        '& .button': {
            background: 'rgba(31,30,30,.5)',
            color: "#ffffff",
            textTransform: "capitalize"
        }
    }
});