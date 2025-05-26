import React, { useState } from 'react';
import { User, MapPin, Bell, MessageCircle, Plus, Send, Download, Upload, Gift, QrCode, Eye, EyeOff } from 'lucide-react';

const DaviplataApp = () => {
  const [showBalance, setShowBalance] = useState(true);
  const [activeTab, setActiveTab] = useState('Mi DaviPlata');

  const styles = {
    container: {
      maxWidth: '400px',
      margin: '0 auto',
      backgroundColor: '#374151',
      minHeight: '100vh',
      color: 'white',
      fontFamily: 'Arial, sans-serif'
    },
    header: {
      backgroundColor: '#dc2626',
      padding: '16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    tabContainer: {
      display: 'flex',
      padding: '16px 16px 0 16px',
      marginBottom: '24px'
    },
    tabActive: {
      padding: '8px 16px',
      borderRadius: '9999px',
      marginRight: '8px',
      fontSize: '14px',
      backgroundColor: 'white',
      color: '#374151',
      border: 'none',
      cursor: 'pointer'
    },
    tabInactive: {
      padding: '8px 16px',
      borderRadius: '9999px',
      fontSize: '14px',
      backgroundColor: '#4b5563',
      color: 'white',
      border: 'none',
      cursor: 'pointer'
    },
    balanceContainer: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '32px'
    },
    balanceCircle: {
      backgroundColor: 'white',
      borderRadius: '50%',
      width: '192px',
      height: '192px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#374151',
      position: 'relative'
    },
    balanceText: {
      fontSize: '14px',
      marginBottom: '8px'
    },
    balanceAmount: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '8px'
    },
    balanceNumber: {
      fontSize: '24px',
      fontWeight: 'bold'
    },
    eyeButton: {
      marginLeft: '8px',
      color: '#6b7280',
      background: 'none',
      border: 'none',
      cursor: 'pointer'
    },
    disponible: {
      fontSize: '12px',
      color: '#6b7280'
    },
    verMas: {
      fontSize: '12px',
      color: '#dc2626',
      marginTop: '8px',
      textDecoration: 'underline',
      cursor: 'pointer'
    },
    actionButtons: {
      display: 'flex',
      justifyContent: 'center',
      gap: '24px',
      marginBottom: '32px'
    },
    actionButton: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      cursor: 'pointer'
    },
    actionIcon: {
      borderRadius: '50%',
      width: '48px',
      height: '48px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '8px'
    },
    redIcon: {
      backgroundColor: '#dc2626'
    },
    orangeIcon: {
      backgroundColor: '#f97316'
    },
    grayIcon: {
      backgroundColor: '#4b5563'
    },
    actionText: {
      fontSize: '12px',
      textAlign: 'center'
    },
    infoCards: {
      padding: '0 16px',
      marginBottom: '24px'
    },
    infoCard: {
      backgroundColor: '#374151',
      borderRadius: '8px',
      padding: '16px',
      marginBottom: '16px',
      cursor: 'pointer'
    },
    cardWithIcon: {
      display: 'flex',
      alignItems: 'center'
    },
    cardIcon: {
      marginRight: '12px'
    },
    iconCircle: {
      width: '32px',
      height: '32px',
      backgroundColor: '#4b5563',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    cardTitle: {
      fontWeight: '600',
      marginBottom: '4px'
    },
    cardDescription: {
      fontSize: '12px',
      color: '#d1d5db'
    },
    movementSection: {
      padding: '0 16px',
      marginBottom: '24px'
    },
    movementHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '12px'
    },
    movementTitle: {
      fontWeight: '600'
    },
    verTodos: {
      fontSize: '12px',
      color: '#9ca3af',
      textDecoration: 'underline',
      cursor: 'pointer'
    },
    movementCard: {
      backgroundColor: '#374151',
      borderRadius: '8px',
      padding: '16px'
    },
    movementItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    movementDescription: {
      fontSize: '14px'
    },
    movementAmount: {
      color: '#10b981',
      fontWeight: '600'
    },
    nfcButton: {
      padding: '0 16px',
      marginBottom: '24px'
    },
    nfcContainer: {
      border: '1px solid #dc2626',
      borderRadius: '9999px',
      padding: '12px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer'
    },
    nfcDot: {
      width: '16px',
      height: '16px',
      backgroundColor: '#dc2626',
      borderRadius: '50%',
      marginRight: '8px'
    },
    nfcText: {
      fontSize: '14px'
    },
    bottomNav: {
      position: 'fixed',
      bottom: '0',
      left: '50%',
      transform: 'translateX(-50%)',
      maxWidth: '400px',
      width: '100%',
      backgroundColor: '#1f2937',
      padding: '12px 16px'
    },
    bottomNavContent: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    bottomNavItem: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      cursor: 'pointer'
    },
    bottomNavText: {
      fontSize: '12px',
      marginTop: '4px'
    },
    qrButton: {
      backgroundColor: '#dc2626',
      borderRadius: '50%',
      width: '56px',
      height: '56px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer'
    },
    dotsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '4px',
      marginBottom: '4px'
    },
    dot: {
      width: '4px',
      height: '4px',
      backgroundColor: 'white',
      borderRadius: '50%'
    },
    spacer: {
      height: '80px'
    }
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <User size={24} />
        <MapPin size={24} />
        <div style={{ color: 'white', fontWeight: 'bold', fontSize: '18px' }}>DaviPlata</div>
        <Bell size={24} />
        <MessageCircle size={24} />
      </div>

      {/* Tab Navigation */}
      <div style={styles.tabContainer}>
        <button 
          style={activeTab === 'Mi DaviPlata' ? styles.tabActive : styles.tabInactive}
          onClick={() => setActiveTab('Mi DaviPlata')}
        >
          Mi DaviPlata
        </button>
        <button 
          style={activeTab === 'Mi Negocio' ? styles.tabActive : styles.tabInactive}
          onClick={() => setActiveTab('Mi Negocio')}
        >
          Mi Negocio
        </button>
      </div>

      {/* Balance Circle */}
      <div style={styles.balanceContainer}>
        <div style={styles.balanceCircle}>
          <p style={styles.balanceText}>¿Cuánto tengo?</p>
          <div style={styles.balanceAmount}>
            <span style={styles.balanceNumber}>
              {showBalance ? '$520.000,00' : '••••••••'}
            </span>
            <button 
              onClick={() => setShowBalance(!showBalance)}
              style={styles.eyeButton}
            >
              {showBalance ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
          <p style={styles.disponible}>Disponible</p>
          <p style={styles.verMas}>Ver más</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div style={styles.actionButtons}>
        <div style={styles.actionButton}>
          <div style={Object.assign({}, styles.actionIcon, styles.redIcon)}>
            <Plus size={24} color="white" />
          </div>
          <span style={styles.actionText}>Meter Plata</span>
        </div>

        <div style={styles.actionButton}>
          <div style={Object.assign({}, styles.actionIcon, styles.orangeIcon)}>
            <Send size={24} color="white" />
          </div>
          <span style={styles.actionText}>Pasar Plata</span>
        </div>

        <div style={styles.actionButton}>
          <div style={Object.assign({}, styles.actionIcon, styles.orangeIcon)}>
            <Download size={24} color="white" />
          </div>
          <span style={styles.actionText}>Sacar Plata</span>
        </div>

        <div style={styles.actionButton}>
          <div style={Object.assign({}, styles.actionIcon, styles.grayIcon)}>
            <div style={styles.dotsGrid}>
              <div style={styles.dot}></div>
              <div style={styles.dot}></div>
              <div style={styles.dot}></div>
              <div style={styles.dot}></div>
            </div>
          </div>
          <span style={styles.actionText}>Más</span>
        </div>
      </div>

      {/* Info Cards */}
      <div style={styles.infoCards}>
        <div style={styles.infoCard}>
          <h3 style={styles.cardTitle}>Mis bolsillos</h3>
          <p style={styles.cardDescription}>Programa tu ahorro y cumple tus propósitos</p>
        </div>

        <div style={Object.assign({}, styles.infoCard, styles.cardWithIcon)}>
          <div style={styles.cardIcon}>
            <div style={styles.iconCircle}>
              <Gift size={16} />
            </div>
          </div>
          <div>
            <h3 style={styles.cardTitle}>Tienda Virtual</h3>
            <p style={styles.cardDescription}>Compra lo que necesitas sin salir de DaviPlata</p>
          </div>
        </div>
      </div>

      {/* Recent Movement */}
      <div style={styles.movementSection}>
        <div style={styles.movementHeader}>
          <h3 style={styles.movementTitle}>Último movimiento</h3>
          <span style={styles.verTodos}>Ver todos</span>
        </div>
        
        <div style={styles.movementCard}>
          <div style={styles.movementItem}>
            <span style={styles.movementDescription}>Recibí Plata</span>
            <span style={styles.movementAmount}>+ $10.000,00</span>
          </div>
        </div>
      </div>

      {/* Pasar Plata por NFC */}
      <div style={styles.nfcButton}>
        <div style={styles.nfcContainer}>
          <div style={styles.nfcDot}></div>
          <span style={styles.nfcText}>Pasar Plata por NFC</span>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div style={styles.bottomNav}>
        <div style={styles.bottomNavContent}>
          <div style={styles.bottomNavItem}>
            <Gift size={24} />
            <span style={styles.bottomNavText}>Tienda Virtual</span>
          </div>
          
          <div style={styles.qrButton}>
            <QrCode size={32} color="white" />
          </div>
          
          <div style={styles.bottomNavItem}>
            <div style={styles.dotsGrid}>
              <div style={styles.dot}></div>
              <div style={styles.dot}></div>
              <div style={styles.dot}></div>
              <div style={styles.dot}></div>
            </div>
            <span style={styles.bottomNavText}>Código QR</span>
          </div>
        </div>
      </div>

      {/* Spacer for bottom navigation */}
      <div style={styles.spacer}></div>
    </div>
  );
};

export default DaviplataApp;