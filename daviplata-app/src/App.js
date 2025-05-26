import React, { useState, useEffect } from 'react';
import { 
  Eye, EyeOff, Plus, Send, Smartphone, CreditCard, 
  User, Settings, Bell, ArrowLeft, ArrowRight, 
  Home, Wallet, History, MoreHorizontal, QrCode,
  Download, Upload, DollarSign, Phone, Zap, MapPin,
  Store, Shirt, Gift
} from 'lucide-react';

const DaviPlataClone = () => {
  const [currentView, setCurrentView] = useState('home');
  const [showBalance, setShowBalance] = useState(true);
  const [user, setUser] = useState({
    name: 'Juan Pérez',
    phone: '+57 300 123 4567',
    balance: 520000,
    cardNumber: '**** **** **** 1234'
  });

  const [transactions] = useState([
    { id: 1, type: 'received', amount: 50000, description: 'Recibió Plata', date: '2024-01-15', from: 'María García' },
    { id: 2, type: 'sent', amount: -25000, description: 'Pago servicios', date: '2024-01-14', to: 'EPM' },
    { id: 3, type: 'received', amount: 100000, description: 'Recarga DaviPlata', date: '2024-01-13', from: 'Bancolombia' },
    { id: 4, type: 'sent', amount: -15000, description: 'Compra en línea', date: '2024-01-12', to: 'MercadoLibre' },
    { id: 5, type: 'received', amount: 30000, description: 'Transferencia P2P', date: '2024-01-11', from: 'Carlos Ruiz' }
  ]);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(Math.abs(amount)).replace('COP', '$');
  };

  const Header = () => (
    <div className="bg-red-600 text-white px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <User className="w-6 h-6" />
          <MapPin className="w-6 h-6" />
        </div>
        <div className="flex items-center">
          <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 30'%3E%3Ctext x='50' y='20' text-anchor='middle' fill='white' font-family='Arial, sans-serif' font-size='14' font-weight='bold'%3EDaviPlata%3C/text%3E%3C/svg%3E" alt="DaviPlata" className="h-8" />
        </div>
        <div className="flex items-center space-x-4">
          <Bell className="w-6 h-6" />
          <Settings className="w-6 h-6" />
        </div>
      </div>
    </div>
  );

  const BalanceCard = () => (
    <div className="bg-gray-800 mx-4 mt-4 rounded-2xl overflow-hidden">
      {/* Tabs */}
      <div className="flex">
        <button className="flex-1 bg-white text-gray-800 py-3 px-4 text-sm font-medium rounded-t-2xl">
          Mi DaviPlata
        </button>
        <button className="flex-1 bg-gray-600 text-white py-3 px-4 text-sm font-medium rounded-t-2xl">
          Mi Negocio
        </button>
      </div>
      
      {/* Balance Circle */}
      <div className="p-8 flex flex-col items-center">
        <div className="w-48 h-48 border-4 border-white rounded-full flex flex-col items-center justify-center mb-6">
          <p className="text-white text-sm mb-2">¿Cuánto tengo?</p>
          <div className="text-white text-2xl font-bold mb-1">
            {showBalance ? formatCurrency(user.balance) : '••••••••'}
          </div>
          <p className="text-white text-xs">Disponible</p>
          <button 
            onClick={() => setShowBalance(!showBalance)}
            className="text-red-400 text-xs mt-2 underline"
          >
            Ver más
          </button>
        </div>
        
        {/* Action Buttons */}
        <div className="flex space-x-4 w-full max-w-xs">
          <div className="flex-1 text-center">
            <button 
              className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-2 mx-auto"
              onClick={() => setCurrentView('meter-plata')}
            >
              <Plus className="w-8 h-8 text-white" />
            </button>
            <p className="text-white text-xs">Meter Plata</p>
          </div>
          
          <div className="flex-1 text-center">
            <button 
              className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-2 mx-auto"
              onClick={() => setCurrentView('pasar-plata')}
            >
              <Send className="w-8 h-8 text-white" />
            </button>
            <p className="text-white text-xs">Pasar Plata</p>
          </div>
          
          <div className="flex-1 text-center">
            <button 
              className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center mb-2 mx-auto"
              onClick={() => setCurrentView('sacar-plata')}
            >
              <Download className="w-8 h-8 text-white" />
            </button>
            <p className="text-white text-xs">Sacar Plata</p>
          </div>
          
          <div className="flex-1 text-center">
            <button 
              className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mb-2 mx-auto"
              onClick={() => setCurrentView('mas')}
            >
              <MoreHorizontal className="w-8 h-8 text-white" />
            </button>
            <p className="text-white text-xs">Más</p>
          </div>
        </div>
      </div>
    </div>
  );

  const ServicesSection = () => (
    <div className="p-4 space-y-4">
      {/* Mis bolsillos */}
      <div className="bg-gray-800 rounded-2xl p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-white font-medium">Mis bolsillos</h3>
          <ArrowRight className="w-5 h-5 text-gray-400" />
        </div>
        <p className="text-gray-300 text-sm">Programa tu ahorro y cumple tus propósitos</p>
      </div>

      {/* Tienda Virtual */}
      <div className="bg-gray-800 rounded-2xl p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <Store className="w-5 h-5 text-gray-800" />
            </div>
            <h3 className="text-white font-medium">Tienda Virtual</h3>
          </div>
          <ArrowRight className="w-5 h-5 text-gray-400" />
        </div>
        <p className="text-gray-300 text-sm">Compra lo que necesita sin salir de DaviPlata</p>
      </div>
    </div>
  );

  const RecentMovements = () => (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white font-medium">Último movimiento</h3>
        <button 
          onClick={() => setCurrentView('history')}
          className="text-red-400 text-sm underline"
        >
          Ver todos
        </button>
      </div>
      
      <div className="bg-gray-800 rounded-xl p-4">
        <div className="flex items-center justify-between">
          <span className="text-white">Recibió Plata</span>
          <span className="text-green-400 font-semibold">+ $10.000,00</span>
        </div>
      </div>
    </div>
  );

  const NFCSection = () => (
    <div className="p-4">
      <div className="bg-gray-800 rounded-xl p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
            <CreditCard className="w-5 h-5 text-white" />
          </div>
          <span className="text-white font-medium">Pasar Plata por NFC</span>
        </div>
        <ArrowRight className="w-5 h-5 text-gray-400" />
      </div>
    </div>
  );

  const BottomNavigation = () => (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 px-4 py-2">
      <div className="flex justify-around items-center">
        <button
          onClick={() => setCurrentView('home')}
          className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
            currentView === 'home' 
              ? 'text-white' 
              : 'text-gray-500'
          }`}
        >
          <Store className="w-6 h-6 mb-1" />
          <span className="text-xs">Tienda Virtual</span>
        </button>
        
        <div className="flex flex-col items-center">
          <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center mb-1">
            <Home className="w-7 h-7 text-white" />
          </div>
        </div>
        
        <button
          onClick={() => setCurrentView('codigo-qr')}
          className="flex flex-col items-center py-2 px-3 rounded-lg text-gray-500"
        >
          <QrCode className="w-6 h-6 mb-1" />
          <span className="text-xs">Código QR</span>
        </button>
      </div>
    </div>
  );

  const SendMoneyView = () => (
    <div className="min-h-screen bg-gray-900">
      <div className="bg-red-600 text-white p-4">
        <div className="flex items-center mb-4">
          <button onClick={() => setCurrentView('home')} className="mr-4">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-semibold">Pasar Plata</h1>
        </div>
      </div>
      
      <div className="p-4 space-y-6">
        <div className="bg-gray-800 rounded-xl p-4">
          <h3 className="text-white font-semibold mb-4">¿A quién le vas a pasar plata?</h3>
          <div className="space-y-3">
            <input
              type="tel"
              placeholder="Número de celular"
              className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent placeholder-gray-400"
            />
            <input
              type="number"
              placeholder="¿Cuánta plata?"
              className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent placeholder-gray-400"
            />
            <textarea
              placeholder="Mensaje (opcional)"
              className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent placeholder-gray-400 h-20"
            />
            <button className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold">
              Continuar
            </button>
          </div>
        </div>
        
        <div className="bg-gray-800 rounded-xl p-4">
          <h3 className="text-white font-semibold mb-3">Contactos recientes</h3>
          <div className="space-y-2">
            {['María García', 'Carlos Ruiz', 'Ana López'].map((contact, index) => (
              <button key={index} className="w-full text-left p-3 hover:bg-gray-700 rounded-lg flex items-center space-x-3">
                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <span className="text-white">{contact}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const HistoryView = () => (
    <div className="min-h-screen bg-gray-900">
      <div className="bg-red-600 text-white p-4">
        <div className="flex items-center mb-4">
          <button onClick={() => setCurrentView('home')} className="mr-4">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-semibold">Historial</h1>
        </div>
      </div>
      
      <div className="p-4">
        <div className="space-y-3">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="bg-gray-800 rounded-xl p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    transaction.type === 'received' 
                      ? 'bg-green-600' 
                      : 'bg-red-600'
                  }`}>
                    {transaction.type === 'received' ? 
                      <Download className="w-6 h-6 text-white" /> : 
                      <Upload className="w-6 h-6 text-white" />
                    }
                  </div>
                  <div>
                    <p className="font-medium text-white">{transaction.description}</p>
                    <p className="text-sm text-gray-400">
                      {transaction.from && `De: ${transaction.from}`}
                      {transaction.to && `Para: ${transaction.to}`}
                    </p>
                    <p className="text-xs text-gray-500">{transaction.date}</p>
                  </div>
                </div>
                <div className={`font-semibold ${
                  transaction.type === 'received' ? 'text-green-400' : 'text-red-400'
                }`}>
                  {transaction.type === 'received' ? '+' : '-'} {formatCurrency(transaction.amount)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderView = () => {
    switch (currentView) {
      case 'pasar-plata':
        return <SendMoneyView />;
      case 'history':
        return <HistoryView />;
      default:
        return (
          <div className="min-h-screen bg-gray-900 pb-20">
            <Header />
            <BalanceCard />
            <ServicesSection />
            <RecentMovements />
            <NFCSection />
          </div>
        );
    }
  };

  return (
    <div className="max-w-md mx-auto bg-gray-900 min-h-screen relative">
      {renderView()}
      <BottomNavigation />
    </div>
  );
};

export default DaviPlataClone;