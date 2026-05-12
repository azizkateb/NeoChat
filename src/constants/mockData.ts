import { Message, Conversation } from "../store/chatStore";

export const MOCK_CONVERSATIONS: Conversation[] = [
  {
    id: "conv-1",
    name: "Neo.System",
    avatarUrl: "https://i.pravatar.cc/150?u=neo",
    lastMessage: "System optimization complete.",
    unreadCount: 0,
    timestamp: "10:42 AM",
    status: "online",
  },
  {
    id: "conv-2",
    name: "Trinity_AI",
    avatarUrl: "https://i.pravatar.cc/150?u=trin",
    lastMessage: "I found the access codes.",
    unreadCount: 2,
    timestamp: "09:15 AM",
    status: "busy",
  },
  {
    id: "conv-3",
    name: "Morpheus_Bot",
    avatarUrl: "https://i.pravatar.cc/150?u=morph",
    lastMessage: "Wake up.",
    unreadCount: 0,
    timestamp: "Yesterday",
    status: "offline",
  },
  {
    id: "conv-4",
    name: "Cyber_Doc",
    avatarUrl: "https://i.pravatar.cc/150?u=doc",
    lastMessage: "Your neural link requires an update.",
    unreadCount: 1,
    timestamp: "Yesterday",
    status: "online",
  },
  {
    id: "conv-5",
    name: "Data_Broker",
    avatarUrl: "https://i.pravatar.cc/150?u=data",
    lastMessage: "Transferring encrypted files...",
    unreadCount: 0,
    timestamp: "Tuesday",
    status: "offline",
  }
];

export const MOCK_MESSAGES: Record<string, Message[]> = {
  "conv-1": [
    { id: "m1", text: "Initializing secure connection...", role: "assistant", timestamp: "10:30 AM" },
    { id: "m2", text: "Connection established. Welcome back.", role: "assistant", timestamp: "10:30 AM" },
    { id: "m3", text: "Status report?", role: "user", timestamp: "10:32 AM" },
    { id: "m4", text: "All core systems nominal. Neural pathways at 98% efficiency. Would you like me to run the diagnostics suite?", role: "assistant", timestamp: "10:32 AM" },
    { id: "m5", text: "Yes, run full diagnostics and output the log.", role: "user", timestamp: "10:35 AM" },
    { id: "m6", text: "Running... please hold.", role: "assistant", timestamp: "10:35 AM" },
    { id: "m7", text: "```bash\n[SYSTEM] Initializing scan...\n[CPU] Load: 12% | Temp: 42C\n[MEM] Usage: 4.2GB / 16GB\n[NET] Latency: 4ms | Enc: AES-256\n[NEURAL] Sync: 99.1%\n\n> ALL SYSTEMS OPTIMAL <\n```", role: "assistant", timestamp: "10:38 AM", isCode: true },
    { id: "m8", text: "Looks good. Any anomalies?", role: "user", timestamp: "10:40 AM" },
    { id: "m9", text: "Minor packet loss on external node 4, routed around it. System optimization complete.", role: "assistant", timestamp: "10:42 AM" },
  ],
  "conv-2": [
    { id: "m1", text: "Are you in?", role: "user", timestamp: "09:10 AM" },
    { id: "m2", text: "Almost. They upgraded the firewalls.", role: "assistant", timestamp: "09:11 AM" },
    { id: "m3", text: "I found the access codes.", role: "assistant", timestamp: "09:15 AM" },
  ]
};
