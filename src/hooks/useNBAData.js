import { useState, useEffect } from 'react';
import { nbaTimeline } from '../data/nbaData';

export const useNBAData = () => {
  const [loading, setLoading] = useState(true);
  const [timeline, setTimeline] = useState([]);

  /**
   * Utilizado para cargar los datos de los campeonatos históricos de la NBA en segundo plano.
   * El estado loading se utiliza para mostrar un indicador de carga mientras se está cargando los datos.
   */
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 500));
      setTimeline(nbaTimeline);
      setLoading(false);
    };
    loadData();
  }, []);

  return { loading, timeline };
};
