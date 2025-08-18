import React, { useState, useEffect } from 'react';
import { User as UserIcon } from 'lucide-react';

interface UserAvatarProps {
  user: {
    photoURL?: string | null;
    displayName?: string | null;
  };
  size?: 'sm' | 'md' | 'lg';
}

const UserAvatar: React.FC<UserAvatarProps> = ({ user, size = 'md' }) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  
  // Debug: sempre mostrar informações da foto
  useEffect(() => {
    console.log('🔍 UserAvatar Debug:', {
      hasPhotoURL: !!user.photoURL,
      photoURL: user.photoURL,
      displayName: user.displayName,
      imageError,
      imageLoaded,
      imageSrc
    });
  }, [user.photoURL, user.displayName, imageError, imageLoaded, imageSrc]);

  const sizeClasses = {
    sm: 'w-6 h-6 text-xs',
    md: 'w-8 h-8 text-sm',
    lg: 'w-12 h-12 text-lg'
  };

  const sizeClass = sizeClasses[size];

  // Resetar estados quando user mudar
  useEffect(() => {
    if (user.photoURL) {
      setImageError(false);
      setImageLoaded(false);
      setImageSrc(user.photoURL);
      console.log('🔄 Carregando foto:', user.photoURL);
    }
  }, [user.photoURL]);

  // Se há foto, mostrar diretamente com fallback
  if (imageSrc) {
    return (
      <div className="relative">
        {/* Imagem do Google - sempre visível */}
        <img 
          src={imageSrc} 
          alt={user.displayName || 'Usuário'} 
          className={`${sizeClass} rounded-full border-2 border-blue-500 shadow object-cover transition-all duration-200`}
          onLoad={() => {
            console.log('✅ Foto carregada com sucesso:', imageSrc);
            setImageLoaded(true);
          }}
          onError={() => {
            console.log('❌ Erro ao carregar foto, usando inicial');
            setImageError(true);
          }}
          crossOrigin="anonymous"
          style={{ minWidth: sizeClass, minHeight: sizeClass }}
        />
        
        {/* Fallback inicial apenas se houver erro */}
        {imageError && (
          <div className={`${sizeClass} rounded-full border-2 border-blue-500 shadow bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold absolute inset-0 transition-all duration-200`}>
            {user.displayName ? user.displayName.charAt(0).toUpperCase() : <UserIcon className="w-4 h-4" />}
          </div>
        )}
      </div>
    );
  }
  
  // Se não há foto ou houve erro, mostrar inicial
  return (
    <div className={`${sizeClass} rounded-full border-2 border-blue-500 shadow bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold transition-all duration-200`}>
      {user.displayName ? user.displayName.charAt(0).toUpperCase() : <UserIcon className="w-4 h-4" />}
    </div>
  );
};

export default UserAvatar;
