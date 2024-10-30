"use client";

import "@radix-ui/themes/styles.css";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { Text } from "@/components/Text";
import { Title } from "@/components/Title";

export default function Home() {
  const router = useRouter();

  const goToAnnotationTable = () => {
    router.push("annotations");
  };

  return (
    <main>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-white">
        <Card.Root className="w-[350px] text-center">
          <Card.Header>
            <Card.Title>
              <Title message="Bem vindo!" color={"text-blue-600"} />
            </Card.Title>
          </Card.Header>
          <Card.Content>
            <Text
              message="Você será direcionado para uma tela com uma tabela de anotações."
              className="text-gray-600"
            />
          </Card.Content>
          <Card.Footer className="flex justify-center">
            <Button
              className="mt-4"
              label="Ir para Anotações"
              icon={<ArrowRight className="ml-2 h-4 w-4" />}
              action={goToAnnotationTable}
            />
          </Card.Footer>
        </Card.Root>
      </div>
    </main>
  );
}
