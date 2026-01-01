'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/Button';
import { LogOut, Settings, Mail, Loader2 } from 'lucide-react';

type User = {
  id: string;
  email: string;
  name: string;
} | null;

type ContactInfo = {
  id: string;
  key: string;
  value: string;
  label: string;
  updatedAt: string;
};

type ContactMessage = {
  id: string;
  name: string;
  email: string;
  company: string | null;
  interest: string;
  message: string;
  read: boolean;
  createdAt: string;
};

export default function AdminDashboard() {
  const router = useRouter();
  const [user, setUser] = useState<User>(null);
  const [activeTab, setActiveTab] = useState<'contact-info' | 'messages'>('contact-info');
  const [loading, setLoading] = useState(true);
  const [contactInfo, setContactInfo] = useState<ContactInfo[]>([]);
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [editingInfo, setEditingInfo] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    if (user) {
      if (activeTab === 'contact-info') {
        fetchContactInfo();
      } else {
        fetchMessages();
      }
    }
  }, [user, activeTab]);

  const checkAuth = async () => {
    try {
      const response = await fetch('/api/auth/session');
      const data = await response.json();

      if (!data.user) {
        router.push('/admin/login');
        return;
      }

      setUser(data.user);
    } catch (error) {
      router.push('/admin/login');
    } finally {
      setLoading(false);
    }
  };

  const fetchContactInfo = async () => {
    try {
      const response = await fetch('/api/admin/contact-info');
      const data = await response.json();
      setContactInfo(data.contactInfo);

      const editing: { [key: string]: string } = {};
      data.contactInfo.forEach((info: ContactInfo) => {
        editing[info.key] = info.value;
      });
      setEditingInfo(editing);
    } catch (error) {
      console.error('Failed to fetch contact info:', error);
    }
  };

  const fetchMessages = async () => {
    try {
      const response = await fetch('/api/admin/messages');
      const data = await response.json();
      setMessages(data.messages);
    } catch (error) {
      console.error('Failed to fetch messages:', error);
    }
  };

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/admin/login');
    router.refresh();
  };

  const handleUpdateContactInfo = async (key: string, label: string) => {
    try {
      const response = await fetch('/api/admin/contact-info', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ key, value: editingInfo[key], label }),
      });

      if (response.ok) {
        alert('Contact info updated successfully');
        fetchContactInfo();
      }
    } catch (error) {
      console.error('Failed to update contact info:', error);
      alert('Failed to update contact info');
    }
  };

  const handleToggleRead = async (id: string, read: boolean) => {
    try {
      const response = await fetch('/api/admin/messages', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, read: !read }),
      });

      if (response.ok) {
        fetchMessages();
      }
    } catch (error) {
      console.error('Failed to update message:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[rgb(var(--color-bg))]">
        <Loader2 className="h-8 w-8 animate-spin text-accent-blue" />
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[rgb(var(--color-bg))]">
      {/* Header */}
      <div className="bg-[rgb(var(--color-surface))] border-b border-[rgb(var(--color-border))]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-[rgb(var(--color-text))]">
              Admin Dashboard
            </h1>
            <p className="text-sm text-[rgb(var(--color-text-muted))]">
              Logged in as {user.email}
            </p>
          </div>
          <Button onClick={handleLogout} variant="ghost" size="sm">
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex space-x-4 mb-6 border-b border-[rgb(var(--color-border))]">
          <button
            onClick={() => setActiveTab('contact-info')}
            className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 ${
              activeTab === 'contact-info'
                ? 'border-accent-blue text-accent-blue'
                : 'border-transparent text-[rgb(var(--color-text-muted))] hover:text-[rgb(var(--color-text))]'
            }`}
          >
            <Settings className="inline-block mr-2 h-4 w-4" />
            Contact Info
          </button>
          <button
            onClick={() => setActiveTab('messages')}
            className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 ${
              activeTab === 'messages'
                ? 'border-accent-blue text-accent-blue'
                : 'border-transparent text-[rgb(var(--color-text-muted))] hover:text-[rgb(var(--color-text))]'
            }`}
          >
            <Mail className="inline-block mr-2 h-4 w-4" />
            Messages ({messages.filter((m) => !m.read).length} unread)
          </button>
        </div>

        {/* Contact Info Tab */}
        {activeTab === 'contact-info' && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-[rgb(var(--color-text))] mb-4">
              Manage Contact Information
            </h2>
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div
                  key={info.id}
                  className="bg-[rgb(var(--color-surface))] border border-[rgb(var(--color-border))] rounded-lg p-6"
                >
                  <label className="block text-sm font-medium mb-2 text-[rgb(var(--color-text))]">
                    {info.label}
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={editingInfo[info.key] || ''}
                      onChange={(e) =>
                        setEditingInfo({ ...editingInfo, [info.key]: e.target.value })
                      }
                      className="flex-1 px-4 py-2 rounded-lg border border-[rgb(var(--color-border))] bg-[rgb(var(--color-bg))] text-[rgb(var(--color-text))] focus-ring"
                    />
                    <Button
                      onClick={() => handleUpdateContactInfo(info.key, info.label)}
                      size="sm"
                    >
                      Update
                    </Button>
                  </div>
                  <p className="text-xs text-[rgb(var(--color-text-muted))] mt-2">
                    Last updated: {new Date(info.updatedAt).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Messages Tab */}
        {activeTab === 'messages' && (
          <div>
            <h2 className="text-xl font-bold text-[rgb(var(--color-text))] mb-4">
              Contact Form Messages
            </h2>
            {messages.length === 0 ? (
              <p className="text-[rgb(var(--color-text-muted))] text-center py-12">
                No messages yet.
              </p>
            ) : (
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`bg-[rgb(var(--color-surface))] border rounded-lg p-6 ${
                      message.read
                        ? 'border-[rgb(var(--color-border))] opacity-70'
                        : 'border-accent-blue/50'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-bold text-lg text-[rgb(var(--color-text))]">
                          {message.name}
                        </h3>
                        <p className="text-sm text-[rgb(var(--color-text-muted))]">
                          {message.email}
                        </p>
                        {message.company && (
                          <p className="text-sm text-[rgb(var(--color-text-muted))]">
                            Company: {message.company}
                          </p>
                        )}
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-[rgb(var(--color-text-muted))]">
                          {new Date(message.createdAt).toLocaleString()}
                        </p>
                        <Button
                          onClick={() => handleToggleRead(message.id, message.read)}
                          variant="ghost"
                          size="sm"
                          className="mt-2"
                        >
                          {message.read ? 'Mark Unread' : 'Mark Read'}
                        </Button>
                      </div>
                    </div>
                    <div className="mb-2">
                      <span className="text-xs px-2 py-1 rounded-full bg-accent-blue/10 text-accent-blue">
                        {message.interest}
                      </span>
                    </div>
                    <p className="text-[rgb(var(--color-text))] whitespace-pre-wrap">
                      {message.message}
                    </p>
                    <div className="mt-4 pt-4 border-t border-[rgb(var(--color-border))]">
                      <a
                        href={`mailto:${message.email}?subject=Re: Your inquiry about ${message.interest}`}
                        className="text-sm text-accent-blue hover:text-accent-cyan"
                      >
                        Reply via Email →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
