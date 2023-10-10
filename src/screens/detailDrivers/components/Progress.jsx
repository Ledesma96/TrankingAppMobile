import { View, Text } from "react-native";
import Svg, { Circle, Text as SvgText } from "react-native-svg";
import { Octicons } from '@expo/vector-icons';
import styles from "./progress.styles";

const Progress = () => {
  const percentage = 40;
  const radius = 50;
  const circumference = 2 * Math.PI * radius;

  return (
    <View style={styles.containerGrafic}>
      <Text style={styles.text}>Progreso</Text>
      <Svg style={styles.svg}>
        <Circle
          r={45}
          cx={75} // Centro horizontalmente
          cy={75}
          stroke="#ccc" // Color del círculo exterior
          strokeWidth={2} // Ancho del círculo exterior
          fill="transparent"
        />
        <Circle
          r={radius}
          cx={75} // Centro horizontalmente
          cy={75}
          stroke="#007AFF" // Color del círculo de progreso
          strokeWidth={10} // Ancho del círculo de progreso
          fill="transparent"
          strokeDasharray={`${
            percentage * (circumference / 100)
          }, ${circumference}`}
        />
        <SvgText
          x={75}
          y={75}
          fontSize="30"
          textAnchor="middle"
          dy="7"
          fill="#007AFF" // Color del porcentaje
        >
          {`${percentage}%`}
        </SvgText>
      </Svg>
      <View style={styles.viewPackage}>
        <View  style={styles.viewPackageContent}>
            <Octicons style={styles.viewPackageContentIcon} name="package-dependents" size={30} color="green" />
            <Text style={styles.viewPackageContentText}>Entregados: 15</Text>
        </View>
        <View style={styles.viewPackageContent}>
            <Octicons style={styles.viewPackageContentIcon} name="package-dependencies" size={30} color="red" />
            <Text style={styles.viewPackageContentText}>No entregados: 25</Text>
        </View>
        <View style={styles.viewPackageContent}>
            <Octicons style={styles.viewPackageContentIcon} name="package" size={30} color="yellow" />
            <Text style={styles.viewPackageContentText}>Pendientes: 60</Text>
        </View>
      </View>
    </View>
  );
};

export default Progress;
