import {makeStyles} from '@mui/styles';

export const headerStyles = makeStyles((theme) => ({
    root: {
        position: "fixed",
        zIndex: 9999,
        top: 0,
        left: 0,
        right: 0,
        boxShadow: '0 1px 6px rgb(0 0 0 / 30%)',
        padding: '2px 0',
        background: '#FFFFFF',
    },

    header: {
        // border: '1px solid red',


    },

    brandLogo: {
        //border: "1px solid green",
        marginTop: 12,

        '& img': {
            width: 153,

        }
    },

    searchBar: {
        position: "relative",
        marginTop: 4,
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
    },

    menu: {
        textAlign: "right",
        marginTop: 2,
        '& .menu-container': {
            display: "inline-block",
            '& table': {
                //border: '1px solid red',
                width: '100%',

                '& a': {
                    paddingLeft: 8,
                    paddingRight: 8,
                    '& img': {
                        width: '25px',
                        height: '25px',
                    }
                }
            }
        },


        '& .upload-photo': {
            background: '#F8F9FA',
            border: '1px solid rgb(179, 176, 182)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '5px 6px',
            borderRadius: 4,
            fontWeight: 500,
            color: '#757070',
            cursor: 'pointer',

            '& img': {
                width: '25px',
                marginRight: 10,
            }
        },

        '& .avatar': {
            paddingLeft: 10,
            cursor: 'pointer',
        }
    }


}));