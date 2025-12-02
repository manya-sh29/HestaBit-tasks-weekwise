import hpp from 'hpp';

export const hppProtection = () => {
  return hpp({
    whitelist: ['sort', 'fields'], 
  });
};
