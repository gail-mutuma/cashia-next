"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { getAIResponse } from "@/server/ai";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

export default function Chat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: trimmed,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const assistantReply = await getAIResponse(trimmed);

      setMessages((prev) => [
        ...prev,
        {
          id: `${Date.now()}-assistant`,
          role: "assistant",
          content: assistantReply,
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          id: `${Date.now()}-assistant-error`,
          role: "assistant",
          content: error instanceof Error ? error.message : "Something went wrong.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {open && (
        <Card className="fixed bottom-24 right-6 z-50 flex h-[min(600px,calc(100vh-8rem))] w-[min(420px,calc(100vw-2rem))] flex-col shadow-xl border-(--cashia-active)">
          <CardHeader>
            <CardTitle className="text-center text-(--cashia-active) text-2xl">Cashia Chat</CardTitle>
          </CardHeader>

          <CardContent className="flex min-h-0 flex-1 flex-col p-0">
            <ScrollArea className="min-h-0 flex-1 overflow-hidden px-4 py-2">
              <div className="space-y-4">
                {messages.length === 0 && !isLoading && (
                  <p className="py-8 text-center text-sm text-muted-foreground">
                    Talk to me.
                  </p>
                )}

              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "flex",
                    message.role === "user" ? "justify-end" : "justify-start"
                  )}
                >
                  <div
                    className={cn(
                      "max-w-[80%] rounded-lg px-4 py-2 text-sm",
                      message.role === "user"
                        ? "bg-(--cashia-active) text-primary-foreground"
                        : "bg-(--cashia-muted) text-primary"
                    )}
                  >
                    {message.content}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="rounded-lg bg-muted px-4 py-2 text-sm text-muted-foreground">
                    Thinking...
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          <div className="border-t p-4 border-(--cashia-active) ">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <Input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask away"
                className="flex-1 focus-visible:border-(--cashia-active) focus-visible:ring-(--cashia-active)/50"
              />
              <Button type="submit" disabled={isLoading || !input.trim()}
              className="bg-(--cashia-active) text-primary-foreground hover:bg-(--cashia-muted) hover:text-(--cashia-active)"
              >
                {isLoading ? "Sending..." : "Send"}
              </Button>
            </form>
          </div>
            </CardContent>
        </Card>
      )}

      <button
        onClick={() => setOpen((currentOpen) => !currentOpen)}
        aria-label={open ? "Close chat" : "Open chat"}
        className={cn(
          "fixed bottom-6 right-6 z-50 flex h-14 items-center justify-center rounded-full px-5 text-sm font-medium text-primary-foreground shadow-lg transition-all hover:scale-105 active:scale-95",
          open ? "bg-(--cashia-active)" : "bg-(--cashia-default)"
        )}
      >
        {open ? "Chat" : "Hi"}
      </button>
    </>
  );
}