import colors from './colors';
import metrics from './metrics';

export default {
  searchInput: {
    backgroundColor: colors.regular,
    borderRadius: metrics.baseRadius,
    paddingHorizontal: metrics.basePadding,
    height: 60,
    color: colors.black,
    fontSize: 22,
  },
  containerItem: {
    marginBottom: 1,
    marginTop: 1,
    height: metrics.screenWidth < 400 ? 60 : 70,
    marginHorizontal: metrics.basePadding,
    flexDirection: 'row',
    alignItems: 'center',
    borderTopColor: colors.dark,
    borderTopWidth: 0.3,
    backgroundColor: colors.white,
  },
  titleItem: {
    fontSize: 22,
    color: colors.black,
  },
};
