import colors from './colors';

const pseodoOutline = (padding, borderRadius, focusColor) => ({
  content: '""',
  position: 'absolute',
  top: -(padding * 3),
  left: -(padding * 3),
  borderRadius,
  width: `calc(100% + ${padding * 4}px)`,
  height: `calc(100% + ${padding * 4}px)`,
  border: `2px solid ${focusColor}`
});

const tabPseodoOutline = (borderRadius, focusColor) => ({
  content: '""',
  position: 'absolute',
  top: 0,
  left: 0,
  borderRadius,
  width: 'calc(100% - 4px)',
  height: 'calc(100% - 4px)',
  border: `2px solid ${focusColor}`
});

// pearson {} should be used for internal reference only
const pearson = {
  font: {
    family: [
      'Open Sans',
      'Calibri',
      'Tahoma',
      'sans-serif'
    ],
    size: {
      small: 12,
      normal: 14
    }
  },
  borderRadius: {
    normal: 22,
    large: 32
  },
  lineHeight: {
    xxl: 1.58,
    xl: 1.5,
    l: 1.38,
    m: 1.33,
    s: 1.29,
    xs: 1.25,
    xxs: 1
  },
  colors,
  iconSize: {
    normal: 19
  },
  padding: {
    xs: 4,
    s: 8,
    m: 12,
    l: 16
  },
  avatar: {
    small: 60,
    large: 120
  }
};

const pearsonMuiTheme = {
  spacing: { unit: 16 },
  props: {
    // Name of the component ⚛️
    MuiButtonBase: {
      // The properties to apply
      disableRipple: true, // No more ripple, on the whole application
      focusVisibleClassName: 'pmuiCustomFocusVisible'
    }
  },
  palette: {
    primary: {
      light: colors.seaBlue,
      main: colors.digitalBlue,
      dark: colors.inkBlue,
      contrastText: colors.white
    },
    secondary: {
      main: colors.white,
      dark: colors.white,
      contrastText: colors.seaBlue
    },
    text: {
      primary: colors.charcoal,
      secondary: colors.mediumGray,
      disabled: colors.concrete,
      hint: colors.charcoal
    },
    action: {
      disabled: colors.mediumGray,
      disabledBackground: colors.moonlight
    }
  },
  typography: {
    useNextVariants: true,
    color: colors.charcoal,
    fontFamily: pearson.font.family,
    fontSize: pearson.font.size.normal
  },
  mixins: {
  },
  overrides: {
    MuiPaper: {
      root: {
        boxSizing: 'border-box',
        fontFamily: pearson.font.size.large,
        fontSize: pearson.font.size.large,
        padding: 0,
        marginBottom: 24,
        marginLeft: 0,
        boxShadow: '0 5px 22px 4px rgba(0, 0, 0, 0.03), 0 7px 8px -4px rgba(0, 0, 0, 0.05)',
        backgroundColor: colors.white
      },
      elevation1: {
        minHeight: 100
      },
      rounded: {
        borderRadius: 8
      }
    },
    MuiAppBar: {
      root: {
        maxWidth: 4000
      },
      colorPrimary: {
        backgroundColor: colors.digitalBlue,
        color: colors.white,
        border: '0 none',
        boxShadow: 'none'
      },
      colorSecondary: {
        backgroundColor: colors.transparent,
        color: colors.white,
        border: '0 none',
        boxShadow: 'none'
      },
      // eslint-disable-next-line no-dupe-keys
      colorDefault: {
        backgroundColor: colors.white,
        color: colors.charcoal,
        border: '0 none',
        boxShadow: 'none'
      }
    },
    MuiTab: {
      root: {
        textTransform: 'none',
        marginRight: 10,
        marginLeft: 10,
        '@media (min-width: 960px)': {
          minWidth: 'inherit'
        },
        '&$selected': {
          fontWeight: 600
        }
      },
      textColorInherit: {
        '&.pmuiCustomFocusVisible': {
          '&:after': tabPseodoOutline(6, colors.white)
        }
      },
      textColorPrimary: {
        '&.pmuiCustomFocusVisible': {
          '&:after': tabPseodoOutline(6, colors.focusBlue)
        }
      },
      textColorSecondary: {
        color: 'rgba(255, 255, 255, 0.8)',
        lineHeight: 1.29,
        textTransform: 'uppercase',
        '&.pmuiCustomFocusVisible': {
          '&:after': tabPseodoOutline(6, colors.white)
        }
      },
      labelContainer: {
        paddingTop: '12px',
        paddingBottom: '10px',
        paddingLeft: 0,
        paddingRight: 0,
        '@media (min-width: 960px)': {
          padding: 'inherit'
        }
      },
      wrapper: {
        paddingLeft: 4,
        paddingRight: 4
      }
    },
    MuiCustomTabs: {
      DarkMode: {
        root: {
          flexGrow: 1,
          backgroundColor: '#f5f5f5',
          padding: '10px',
          fontFamily: 'OpenSans',
          fontStyle: 'normal',
          fontStretch: 'normal',
          letterSpacing: 'normal'
        },
        tabs: {
          backgroundColor: '#002e60',
          fontSize: '14px',
          fontWeight: 'bold',
          lineHeight: '1.29',
          color: '#ffffff'
        },
        indicator: {
          height: 3,
          borderRadius: 2,
          backgroundColor: '#ffffff'
        },
        CustomTab: {
          border: 0,
          fontSize: '14px',
          lineHeight: '1.29'
        }
      }
    },
    MuiPrivateTabIndicator: {
      colorSecondary: {
        backgroundColor: colors.white,
        height: 3,
        marginBottom: 8
      }
    },
    MuiVerticalTabs: {
      root: {
        flexGrow: 1,
        display: 'flex',
        minHeight: 224,
        height: '100%',
        padding: '20px',
        backgroundColor: '#f5f5f5'
      },
      activeTab: {
        opacity: 0.8,
        backgroundColor: '#33557b',
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8
      },
      tab: {
        color: '#ffffff',
        margin: 0,
        height: 80,
        fontSize: 10,
        minHeight: 60,
        opacity: 1,
        '&:hover': {
          opacity: 0.8,
          borderTopLeftRadius: 8,
          borderBottomLeftRadius: 8,
          backgroundColor: 'rgba(255, 255, 255, 0.6)',
          color: '#003558'
        },
        '&:active': {
          opacity: 0.8,
          backgroundColor: '#33557b'
        },
        '&:visited': {
          opacity: 0.8,
          backgroundColor: '#33557b'
        }
      },
      tabContent: {
        width: '100%',
        paddingLeft: '10px'
      }
    },
    MuiTypography: {
      colorSecondary: {
        color: colors.mediumGray
      },
      root: {
        lineHeight: pearson.lineHeight.l,
        color: colors.charcoal,
        fontSize: 16
      },
      h1: {
        fontSize: '1.5em'
      },
      h2: {
        fontSize: '1.75em',
        fontWeight: 'bold',
        lineHeight: pearson.lineHeight.m
      },
      h3: {
        fontSize: '1.25em',
        fontWeight: 300,
        fontStyle: 'normal',
        letterSpacing: 0.37,
        color: colors.charcoal,
        lineHeight: pearson.lineHeight.m,
        marginBottom: 16
      },
      h4: {
        fontSize: '1.125em',
        letterSpacing: 'normal',
        lineHeight: pearson.lineHeight.m
      },
      h5: {
        letterSpacing: 0.3,
        fontSize: '1em',
        lineHeight: pearson.lineHeight.xs,
        color: colors.charcoal
      },
      h6: {
        fontSize: 24,
        lineHeight: pearson.lineHeight.xxs,
        color: colors.charcoal
      },
      subtitle1: {
        fontSize: '.75em',
        letterSpacing: 0.15,
        color: colors.mediumGray,
        lineHeight: pearson.lineHeight.xl
      },
      subtitle2: {
        fontSize: '.875em',
        fontWeight: 'normal',
        color: colors.mediumGray,
        letterSpacing: -0.3,
        lineHeight: pearson.lineHeight.m
      },
      body1: {
        fontSize: 16,
        color: colors.mediumGray,
        lineHeight: pearson.lineHeight.xs
      },
      body2: {
        fontSize: 16
      }
    },
    MuiAvatar: {
      root: {
        height: 48,
        width: 48,
        fontSize: '1rem',
        fontWeight: 'bold'
      },
      colorDefault: {
        height: 40,
        width: 40,
        backgroundColor: colors.mediumGray,
        color: colors.white,
        border: `0px solid ${colors.mediumGray}`
      }
    },
    MuiButtonBase: {
      root: {
        boxSizing: 'content-box',
        border: `2px solid ${colors.transparent}`,
        '&$focusVisible': {
          '&:after': pseodoOutline(2, 36, colors.focusBlue)
        }
      }
    },
    MuiButton: {
      root: {
        fontSize: 16,
        lineHeight: 1.25,
        textTransform: 'none',
        '&$disabled': {
          backgroundColor: colors.moonlight
        }
      },
      label: {
        minWidth: 104
      },
      text: {
        borderRadius: pearson.borderRadius.normal,
        backgroundColor: colors.alto
      },
      outlined: {
        boxShadow: '0 5px 22px 4px rgba(0, 0, 0, 0.03), 0 7px 8px -4px rgba(0, 0, 0, 0.05)',
        borderColor: colors.mediumGray,
        color: colors.mediumGray,
        backgroundColor: 'transparent',
        borderRadius: pearson.borderRadius.normal,
        '&:hover': {
          color: colors.charcoal,
          backgroundColor: 'transparent',
          borderColor: colors.charcoal
        },
        '&$disabled': {
          border: '1px solid',
          borderColor: colors.moonlight
        }
      },
      textPrimary: {
        color: colors.whiteGray,
        backgroundColor: colors.strawberryRed,
        '&:hover': {
          color: colors.white,
          backgroundColor: colors.strawberryRed
        }
      },
      outlinedPrimary: {
        padding: '7px 24px',
        color: colors.white,
        backgroundColor: colors.digitalBlue,
        borderColor: colors.digitalBlue,
        '&:hover': {
          color: colors.white,
          borderColor: colors.inkBlue,
          backgroundColor: colors.inkBlue
        }
      },
      outlinedSecondary: {
        color: colors.seaBlue,
        borderColor: colors.white,
        backgroundColor: colors.white,
        '&:hover': {
          backgroundColor: colors.white,
          color: colors.inkBlue
        }
      },
      contained: {
        padding: '7px 20px',
        fontSize: 14,
        lineHeight: '18px',
        fontWeight: 600,
        borderRadius: pearson.borderRadius.normal
      },
      containedPrimary: {
        color: colors.whiteGray
      },
      sizeSmall: {
        padding: '5px 24px',
        fontSize: '0.875rem',
        '& span': {
          minWidth: 80
        }
      },
      sizeLarge: {
        padding: '9px 24px',
        fontSize: '16px',
        lineHeight: '20px',
        borderRadius: pearson.borderRadius.large,
        fontWeight: 600
      }
    },
    MuiCardActions: {
      paddingRight: pearson.padding.l,
      root: {
        '& div': {
          fontSize: pearson.font.size.small,
          color: pearson.colors.charcoal,
          paddingLeft: 10,
          letterSpacing: -0.07
        },
        '@media (min-width:600px)': {
          paddingLeft: pearson.padding.xs,
          paddingRight: pearson.padding.m,
          paddingTop: pearson.padding.xs,
          paddingBottom: pearson.padding.s
        }
      }
    },
    MuiCardContent: {
      root: {
        paddingTop: pearson.padding.l,
        paddingBottom: pearson.padding.xs,
        paddingLeft: pearson.padding.l,
        paddingRight: pearson.padding.l,
        '@media (min-width:600px)': {
          paddingTop: pearson.padding.l,
          paddingBottom: pearson.padding.xs,
          paddingLeft: pearson.padding.l,
          paddingRight: pearson.padding.l
        }
      }
    },
    MuiCardHeader: {
      root: {
        paddingBottom: 0,
        alignItems: 'flex-start',
        marginBottom: -28
      },
      content: {
        overflow: 'hidden',
        '& span': {
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          fontSize: '0.6875em',
          textTransform: 'uppercase',
          lineHeight: 'normal'
        }
      }
    },
    MuiDivider: {
      root: {
        backgroundColor: colors.alto,
        marginTop: pearson.padding.l,
        marginBottom: pearson.padding.l
      }
    },
    MuiListItem: {
      button: {
        '&:hover': {
          backgroundColor: 'inherit',
          '& .applyHover': {
            color: pearson.colors.seaBlue
          }
        }
      }
    },
    MuiPopover: {
      root: {
        borderRadius: '4px',
        padding: '24px',
        boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.4)',
        marginTop: '10px'
      },
      paper: {
        padding: '24px'
      }
    },
    MuiSlider: {
      root: {},
      track: {
        backgroundColor: colors.alto,
        height: '4px'
      },
      thumb: {
        backgroundColor: colors.digitalMarineTurquoise,
        width: '15px',
        height: '15px'
      }
    },
    MuiSvgIcon: {
      colorPrimary: {
        fill: colors.whiteGray
      },
      colorAction: {
        color: colors.charcoal
      },
      fontSizeSmall: {
        fontSize: '18px'
      },
      fontSizeLarge: {
        fontSize: '30px'
      }
    },
    MuiDialogActions: {
      root: {
        margin: 24
      }
    },
    MuiIconButton: {
      root: {
        padding: 5,
        color: colors.charcoal,
        '&:hover': {
          backgroundColor: colors.transparent,
          '& .avatarHover': {
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            color: colors.white
          }
        }
      }
    },
    MuiRadio: {
      root: {
        paddingTop: 2,
        '&$checked': {
          '& + span': {
            fontWeight: 700,
            color: colors.digitalBlue
          }
        }
      }
    },
    MuiFormControl: {
    },
    MuiUnderline: {
      root: {
        '&:after': {
          borderBottomWidth: 4
        }
      }
    },
    MuiFormLabel: {
      root: {
        lineHeight: 1.38,
        '&$focused': {
          color: colors.charcoal
        }
      }
    },
    MuiFormControlLabel: {
      root: {
        alignItems: 'flex-start',
        paddingTop: 30
      }
    }
  }
};

export default pearsonMuiTheme;
export { default as CardList } from './components/CardList';
export { default as VerticalTabs } from './components/VerticalTabs';
export { default as MediaCard } from './components/MediaCard';
export { default as Avatar } from './components/Avatar';
export { default as ProfileDisplay } from './components/ProfileDisplay';
export { default as ProfileDropdown } from './components/ProfileDropdown';
export { default as AddIcon } from './icons/Add';
export { default as AddItemIcon } from './icons/AddItem';
export { default as ArchiveIcon } from './icons/Archive';
export { default as ArrowBackIcon } from './icons/ArrowBack';
export { default as AssignedIcon } from './icons/Assigned';
export { default as CaretDownIcon } from './icons/CaretDown';
export { default as CaretUpIcon } from './icons/CaretUp';
export { default as CheckCircleFilledIcon } from './icons/CheckCircleFilled';
export { default as ChevronBackIcon } from './icons/ChevronBack';
export { default as ChevronNextIcon } from './icons/ChevronNext';
export { default as CircleOutlineIcon } from './icons/CircleOutline';
export { default as BookmarkoffIcon } from './icons/Bookmarkoff';
export { default as BookmarkonIcon } from './icons/Bookmarkon';
export { default as ContentsIcon } from './icons/Contents';
export { default as NoteBookIcon } from './icons/Notebook';
export { default as ResourcesIcon } from './icons/Resources';
export { default as StudyIcon } from './icons/Study';
export { default as ExpandIcon } from './icons/Expand';
export { default as FilterIcon } from './icons/Filter';
export { default as PearsonLogo } from './icons/PearsonLogo';
export { default as ListenIcon } from './icons/Listen';
export { default as MenuIcon } from './icons/Menu';
export { default as RemoveIcon } from './icons/Remove';
export { default as SearchIcon } from './icons/Search';
export { default as CalendarOutlined } from './icons/CalendarOutlined';
export { default as LockIcon } from './icons/Lock';
export { default as SmallCircleFilledIcon } from './icons/SmallCircleFilled';
export { default as SmallCircleHalfFilledIcon } from './icons/SmallCircleHalfFilled';
export { default as SmallCircleOutlineIcon } from './icons/SmallCircleOutline';
export { default as StarFilledIcon } from './icons/StarFilled';
export { default as StarHalfFilledIcon } from './icons/StarHalfFilled';
export { default as StarOutlineIcon } from './icons/StarOutline';
