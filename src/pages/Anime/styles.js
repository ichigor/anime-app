import { StyleSheet } from 'react-native';
import { metrics, colors } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  form: {
    marginTop: metrics.basePadding,
    marginHorizontal: metrics.basePadding,
    paddingBottom: metrics.basePadding,
    backgroundColor: colors.white,
  },
  loading: {
    marginTop: metrics.basePadding,
  },
  image: {
    alignItems: 'stretch',
    width: 370,
    height: 550,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  episode: { fontSize: 18 },
  synopsis: { fontSize: 18 },
});

export default styles;
