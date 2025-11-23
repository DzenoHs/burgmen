import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User as UserIcon } from 'lucide-react';

const translations = {
  bs: {
    chatTitle: 'BURGMEN Podrška',
    chatSubtitle: 'Obično odgovaramo za 2 min',
    placeholder: 'Napišite poruku...',
    send: 'Pošalji',
    typing: 'Piše...',
    initialMessage: 'Zdravo! 👋 Dobrodošli u BURGMEN! Kako vam mogu pomoći danas?',
    faqTitle: '💬 Često Postavljena Pitanja',
    faqSubtitle: 'Klikni na pitanje za brz odgovor',
    faqQuestions: [
      { 
        id: 1, 
        question: '🕐 Koje je vaše radno vrijeme?', 
        keyword: 'radno vrijeme' 
      },
      { 
        id: 2, 
        question: '🚗 Da li imate dostavu?', 
        keyword: 'dostava' 
      },
      { 
        id: 3, 
        question: '💰 Koliko koštaju burgeri?', 
        keyword: 'cijene' 
      },
      { 
        id: 4, 
        question: '🥗 Informacije o alergenima?', 
        keyword: 'alergeni' 
      },
      { 
        id: 5, 
        question: '📍 Gdje se nalazite?', 
        keyword: 'lokacija' 
      },
      { 
        id: 6, 
        question: '📱 Kako vas mogu kontaktirati?', 
        keyword: 'kontakt' 
      },
    ],
  },
  en: {
    chatTitle: 'BURGMEN Support',
    chatSubtitle: 'We usually reply in 2 min',
    placeholder: 'Type a message...',
    send: 'Send',
    typing: 'Typing...',
    initialMessage: 'Hello! 👋 Welcome to BURGMEN! How can I help you today?',
    faqTitle: '💬 Frequently Asked Questions',
    faqSubtitle: 'Click on a question for quick answer',
    faqQuestions: [
      { 
        id: 1, 
        question: '🕐 What are your working hours?', 
        keyword: 'working hours' 
      },
      { 
        id: 2, 
        question: '🚗 Do you have delivery?', 
        keyword: 'delivery' 
      },
      { 
        id: 3, 
        question: '💰 How much do burgers cost?', 
        keyword: 'prices' 
      },
      { 
        id: 4, 
        question: '🥗 Allergen information?', 
        keyword: 'allergens' 
      },
      { 
        id: 5, 
        question: '📍 Where are you located?', 
        keyword: 'location' 
      },
      { 
        id: 6, 
        question: '📱 How can I contact you?', 
        keyword: 'contact' 
      },
    ],
  }
};

const faqResponses = {
  bs: {
    'radno vrijeme': 'Naše radno vrijeme:\n🕐 Pon-Pet: 09:00 - 23:00\n🕐 Subota: 14:00 - 00:00\n🕐 Nedjelja: 14:00 - 23:00',
    'dostava': 'Da, imamo dostavu! 🚗\n📍 Besplatna dostava za narudžbe preko 20 KM\n⏱️ Prosječno vrijeme dostave: 30-45 min\n📞 Za narudžbe nazovite: +387 (61) 123-456',
    'cijene': 'Naši burgeri kreću od 8 KM do 15 KM! 🍔\n💰 Najpopularniji: Classic Beast (10 KM)\n🔥 Combo ponude dostupne svakodnevno!\n📱 Provjerite kompletan meni na našoj stranici.',
    'alergeni': 'Uzimamo alergije vrlo ozbiljno! 🥗\n✅ Bez glutena opcije dostupne\n✅ Vegetarijanske opcije\n✅ Deklarisanje svih alergena\n💬 Molimo informišite nas o alergijama pri narudžbi!',
    'lokacija': 'Nalazimo se u centru Visokog! 📍\n🏠 Adresa: Čaršijska 18, Visoko 71300\n🚗 Parking dostupan u blizini\n🗺️ Možete nas pronaći na Google Maps',
    'kontakt': 'Kontaktirajte nas:\n📞 Telefon: +387 (61) 123-456\n📧 Email: info@burgmen.ba\n📱 Instagram: @burgmen__\n💬 Ili nam pošaljite poruku ovdje!',
    'default': 'Hvala na pitanju! Za detaljnije informacije:\n📞 Telefon: +387 (61) 123-456\n📍 Adresa: Čaršijska 18, Visoko\n📱 Instagram: @burgmen__',
  },
  en: {
    'working hours': 'Our working hours:\n🕐 Mon-Fri: 09:00 - 23:00\n🕐 Saturday: 14:00 - 00:00\n🕐 Sunday: 14:00 - 23:00',
    'delivery': 'Yes, we have delivery! 🚗\n📍 Free delivery for orders over 20 KM\n⏱️ Average delivery time: 30-45 min\n📞 For orders call: +387 (61) 123-456',
    'prices': 'Our burgers start from 8 KM to 15 KM! 🍔\n💰 Most popular: Classic Beast (10 KM)\n🔥 Combo deals available daily!\n📱 Check complete menu on our website.',
    'allergens': 'We take allergies very seriously! 🥗\n✅ Gluten-free options available\n✅ Vegetarian options\n✅ All allergens declared\n💬 Please inform us about allergies when ordering!',
    'location': 'We are located in the center of Visoko! 📍\n🏠 Address: Čaršijska 18, Visoko 71300\n🚗 Parking available nearby\n🗺️ You can find us on Google Maps',
    'contact': 'Contact us:\n📞 Phone: +387 (61) 123-456\n📧 Email: info@burgmen.ba\n📱 Instagram: @burgmen__\n💬 Or send us a message here!',
    'default': 'Thank you for your question! For more information:\n📞 Phone: +387 (61) 123-456\n📍 Address: Čaršijska 18, Visoko\n📱 Instagram: @burgmen__',
  }
};

const LiveChat = ({ language }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const [showFAQ, setShowFAQ] = useState(true);
  const messagesEndRef = useRef(null);
  const t = translations[language];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const addBotMessage = (text) => {
    const botMessage = {
      id: Date.now(),
      text,
      sender: 'bot',
      timestamp: new Date().toLocaleTimeString('bs-BA', { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages(prev => [...prev, botMessage]);
    
    if (!isOpen) {
      setUnreadCount(prev => prev + 1);
    }
  };

  const addUserMessage = (text) => {
    const userMessage = {
      id: Date.now(),
      text,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString('bs-BA', { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages(prev => [...prev, userMessage]);
  };

  const getBotResponse = (userInput) => {
    const input = userInput.toLowerCase();
    const responses = faqResponses[language];
    
    // Check for keywords
    if (input.includes('radno') || input.includes('vrijeme') || input.includes('working') || input.includes('hours')) {
      return responses['radno vrijeme'] || responses['working hours'];
    }
    if (input.includes('dostava') || input.includes('delivery')) {
      return responses['dostava'] || responses['delivery'];
    }
    if (input.includes('cijen') || input.includes('price')) {
      return responses['cijene'] || responses['prices'];
    }
    if (input.includes('alergen') || input.includes('allergen') || input.includes('gluten')) {
      return responses['alergeni'] || responses['allergens'];
    }
    if (input.includes('lokacij') || input.includes('location') || input.includes('adres') || input.includes('gdje')) {
      return responses['lokacija'] || responses['location'];
    }
    if (input.includes('kontakt') || input.includes('contact') || input.includes('telefon') || input.includes('phone')) {
      return responses['kontakt'] || responses['contact'];
    }
    
    return responses['default'];
  };

  const handleFAQClick = (keyword) => {
    const faqQuestion = t.faqQuestions.find(q => q.keyword === keyword);
    if (faqQuestion) {
      // Clear previous messages and show new conversation
      setMessages([]);
      setShowFAQ(false);
      
      addUserMessage(faqQuestion.question);
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        const response = getBotResponse(keyword);
        addBotMessage(response);
      }, 800);
    }
  };

  const handleBackToFAQ = () => {
    setMessages([]);
    setShowFAQ(true);
  };

  const handleSend = () => {
    if (inputValue.trim()) {
      addUserMessage(inputValue);
      const userInput = inputValue;
      setInputValue('');
      
      // Simulate typing
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        const response = getBotResponse(userInput);
        addBotMessage(response);
      }, 1000 + Math.random() * 1000);
    }
  };

  const handleQuickReply = (reply) => {
    addUserMessage(reply);
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const response = getBotResponse(reply);
      addBotMessage(response);
    }, 1000);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setUnreadCount(0);
    } else {
      // Reset to FAQ when closing
      setMessages([]);
      setShowFAQ(true);
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={toggleChat}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-[9998] bg-gradient-to-r from-burger-red to-burger-orange text-burger-white p-4 rounded-full shadow-2xl hover:shadow-burger-red/50 transition-all"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={28} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle size={28} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Unread Badge */}
        {unreadCount > 0 && !isOpen && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-2 -right-2 bg-burger-yellow text-burger-black w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
          >
            {unreadCount}
          </motion.div>
        )}

        {/* Pulse Animation */}
        {!isOpen && (
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-burger-red rounded-full opacity-50 -z-10"
          />
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-[9999] w-96 max-w-[calc(100vw-3rem)] h-[600px] max-h-[calc(100vh-10rem)] bg-burger-black border-2 border-burger-red rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-burger-red to-burger-orange p-4 flex items-center gap-3">
              <div className="w-12 h-12 bg-burger-yellow rounded-full flex items-center justify-center">
                <Bot size={24} className="text-burger-black" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-burger-white">{t.chatTitle}</h3>
                <p className="text-xs text-burger-white/70">{t.chatSubtitle}</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-burger-black/50">
              {/* FAQ Section - Show when showFAQ is true */}
              {showFAQ && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-3"
                >
                  <div className="text-center mb-4">
                    <h4 className="text-burger-yellow font-bold text-lg mb-1">{t.faqTitle}</h4>
                    <p className="text-burger-white/60 text-xs">{t.faqSubtitle}</p>
                  </div>
                  
                  <div className="space-y-2">
                    {t.faqQuestions.map((faq) => (
                      <motion.button
                        key={faq.id}
                        onClick={() => handleFAQClick(faq.keyword)}
                        whileHover={{ scale: 1.02, x: 4 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full text-left px-4 py-3 bg-burger-red/10 hover:bg-burger-red/20 border border-burger-red/30 hover:border-burger-red/50 rounded-xl text-burger-white text-sm transition-all group"
                      >
                        <span className="group-hover:text-burger-yellow transition-colors">
                          {faq.question}
                        </span>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}

              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex gap-2 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                    {/* Avatar */}
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.sender === 'bot' ? 'bg-burger-yellow' : 'bg-burger-red'
                    }`}>
                      {message.sender === 'bot' ? (
                        <Bot size={16} className="text-burger-black" />
                      ) : (
                        <UserIcon size={16} className="text-burger-white" />
                      )}
                    </div>

                    {/* Message Bubble */}
                    <div>
                      <div className={`rounded-2xl px-4 py-2 ${
                        message.sender === 'bot'
                          ? 'bg-burger-red/20 border border-burger-red/30'
                          : 'bg-burger-red text-burger-white'
                      }`}>
                        <p className="text-sm whitespace-pre-line">{message.text}</p>
                      </div>
                      <p className="text-xs text-burger-white/40 mt-1 px-2">
                        {message.timestamp}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-2"
                >
                  <div className="w-8 h-8 rounded-full bg-burger-yellow flex items-center justify-center">
                    <Bot size={16} className="text-burger-black" />
                  </div>
                  <div className="bg-burger-red/20 border border-burger-red/30 rounded-2xl px-4 py-2">
                    <div className="flex gap-1">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                        className="w-2 h-2 bg-burger-red rounded-full"
                      />
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                        className="w-2 h-2 bg-burger-red rounded-full"
                      />
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                        className="w-2 h-2 bg-burger-red rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Back to FAQ button - Show after answer is displayed */}
              {!showFAQ && messages.length > 0 && !isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-center pt-4"
                >
                  <button
                    onClick={handleBackToFAQ}
                    className="px-6 py-2 bg-gradient-to-r from-burger-red to-burger-orange text-burger-white rounded-xl hover:opacity-80 transition-all font-medium text-sm"
                  >
                    {language === 'bs' ? '← Nazad na pitanja' : '← Back to questions'}
                  </button>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>



            {/* Input */}
            <div className="p-4 border-t border-burger-red/30 bg-burger-black">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder={t.placeholder}
                  className="flex-1 px-4 py-2 bg-burger-black/50 border border-burger-red/30 rounded-xl text-burger-white placeholder-burger-white/50 focus:outline-none focus:border-burger-red transition-all"
                />
                <button
                  onClick={handleSend}
                  className="px-4 py-2 bg-gradient-to-r from-burger-red to-burger-orange text-burger-white rounded-xl hover:opacity-80 transition-opacity"
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LiveChat;
