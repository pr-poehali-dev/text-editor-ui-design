
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Icon from "@/components/ui/icon";

const TextEditor = () => {
  const [text, setText] = useState<string>("");
  const [fileName, setFileName] = useState<string>("Новый документ");
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);
  const [theme, setTheme] = useState<string>("light");
  const [fontSize, setFontSize] = useState<string>("16");

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleSave = () => {
    console.log("Сохранение файла:", fileName, text);
    // В реальном приложении здесь был бы код для сохранения файла
  };

  const handleOpen = () => {
    // В реальном приложении здесь был бы код для открытия файла
    console.log("Открытие файла");
  };

  return (
    <div className="flex flex-col h-screen bg-background">
      {/* Верхняя панель с меню */}
      <header className="border-b bg-white shadow-sm">
        <div className="container flex h-14 items-center px-4">
          <div className="mr-4 flex items-center">
            <Icon name="FileEdit" className="h-6 w-6 text-primary mr-2" />
            <h1 className="text-xl font-medium">Текстовый редактор</h1>
          </div>
          <nav className="flex items-center space-x-4 lg:space-x-6 ml-4">
            {/* Меню "Файл" */}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" size="sm">Файл</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Файл</DialogTitle>
                  <DialogDescription>
                    Операции с файлами
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <Button onClick={handleOpen} className="w-full justify-start" variant="ghost">
                    <Icon name="FolderOpen" className="mr-2 h-4 w-4" />
                    Открыть
                  </Button>
                  <Button onClick={handleSave} className="w-full justify-start" variant="ghost">
                    <Icon name="Save" className="mr-2 h-4 w-4" />
                    Сохранить
                  </Button>
                  <Button className="w-full justify-start" variant="ghost">
                    <Icon name="FilePlus" className="mr-2 h-4 w-4" />
                    Создать новый
                  </Button>
                  <Button className="w-full justify-start" variant="ghost">
                    <Icon name="Printer" className="mr-2 h-4 w-4" />
                    Печать
                  </Button>
                </div>
              </DialogContent>
            </Dialog>

            {/* Меню "Правка" */}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" size="sm">Правка</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Правка</DialogTitle>
                  <DialogDescription>
                    Инструменты редактирования
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <Button className="w-full justify-start" variant="ghost">
                    <Icon name="Copy" className="mr-2 h-4 w-4" />
                    Копировать
                  </Button>
                  <Button className="w-full justify-start" variant="ghost">
                    <Icon name="Scissors" className="mr-2 h-4 w-4" />
                    Вырезать
                  </Button>
                  <Button className="w-full justify-start" variant="ghost">
                    <Icon name="Clipboard" className="mr-2 h-4 w-4" />
                    Вставить
                  </Button>
                  <Button className="w-full justify-start" variant="ghost">
                    <Icon name="Undo2" className="mr-2 h-4 w-4" />
                    Отменить
                  </Button>
                  <Button className="w-full justify-start" variant="ghost">
                    <Icon name="Redo2" className="mr-2 h-4 w-4" />
                    Повторить
                  </Button>
                </div>
              </DialogContent>
            </Dialog>

            {/* Меню "Формат" */}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" size="sm">Формат</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Формат</DialogTitle>
                  <DialogDescription>
                    Форматирование текста
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <Button className="w-full justify-start" variant="ghost">
                    <Icon name="Bold" className="mr-2 h-4 w-4" />
                    Полужирный
                  </Button>
                  <Button className="w-full justify-start" variant="ghost">
                    <Icon name="Italic" className="mr-2 h-4 w-4" />
                    Курсив
                  </Button>
                  <Button className="w-full justify-start" variant="ghost">
                    <Icon name="Underline" className="mr-2 h-4 w-4" />
                    Подчеркнутый
                  </Button>
                  <Button className="w-full justify-start" variant="ghost">
                    <Icon name="AlignLeft" className="mr-2 h-4 w-4" />
                    По левому краю
                  </Button>
                  <Button className="w-full justify-start" variant="ghost">
                    <Icon name="AlignCenter" className="mr-2 h-4 w-4" />
                    По центру
                  </Button>
                  <Button className="w-full justify-start" variant="ghost">
                    <Icon name="AlignRight" className="mr-2 h-4 w-4" />
                    По правому краю
                  </Button>
                </div>
              </DialogContent>
            </Dialog>

            {/* Меню "Настройки" */}
            <Dialog open={isSettingsOpen} onOpenChange={setIsSettingsOpen}>
              <DialogTrigger asChild>
                <Button variant="ghost" size="sm">Настройки</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Настройки редактора</DialogTitle>
                  <DialogDescription>
                    Настройте параметры редактора по своему вкусу
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="theme" className="text-right">
                      Тема
                    </label>
                    <div className="col-span-3">
                      <Tabs defaultValue={theme} onValueChange={setTheme} className="w-full">
                        <TabsList className="grid w-full grid-cols-2">
                          <TabsTrigger value="light">Светлая</TabsTrigger>
                          <TabsTrigger value="dark">Темная</TabsTrigger>
                        </TabsList>
                      </Tabs>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="fontSize" className="text-right">
                      Размер шрифта
                    </label>
                    <Input
                      id="fontSize"
                      value={fontSize}
                      onChange={(e) => setFontSize(e.target.value)}
                      className="col-span-3"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit" onClick={() => setIsSettingsOpen(false)}>
                    Сохранить настройки
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </nav>
          <div className="ml-auto flex items-center gap-2">
            <Input
              value={fileName}
              onChange={(e) => setFileName(e.target.value)}
              className="max-w-[180px]"
            />
            <Button onClick={handleSave} variant="default" size="sm">
              <Icon name="Save" className="mr-2 h-4 w-4" />
              Сохранить
            </Button>
          </div>
        </div>
        
        {/* Панель инструментов форматирования */}
        <div className="container flex h-10 items-center px-4 border-t">
          <div className="flex space-x-1">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Icon name="Bold" className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Icon name="Italic" className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Icon name="Underline" className="h-4 w-4" />
            </Button>
            <div className="w-px h-6 bg-border mx-1 self-center" />
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Icon name="AlignLeft" className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Icon name="AlignCenter" className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Icon name="AlignRight" className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Icon name="AlignJustify" className="h-4 w-4" />
            </Button>
            <div className="w-px h-6 bg-border mx-1 self-center" />
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Icon name="List" className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Icon name="ListOrdered" className="h-4 w-4" />
            </Button>
            <div className="w-px h-6 bg-border mx-1 self-center" />
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Icon name="Link" className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Icon name="Image" className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Боковая панель для системы навигации */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="absolute left-4 top-28 z-10">
              <Icon name="PanelLeft" className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[250px] sm:w-[300px] sm:max-w-[300px]">
            <SheetHeader>
              <SheetTitle>Навигация</SheetTitle>
              <SheetDescription>
                Структура документа и закладки
              </SheetDescription>
            </SheetHeader>
            <div className="mt-6 border-t pt-4">
              <div className="flex flex-col space-y-2">
                <Button variant="ghost" className="justify-start">
                  <Icon name="File" className="mr-2 h-4 w-4" />
                  Новый документ
                </Button>
                <Button variant="ghost" className="justify-start">
                  <Icon name="Folder" className="mr-2 h-4 w-4" />
                  Мои документы
                </Button>
                <Button variant="ghost" className="justify-start">
                  <Icon name="Clock" className="mr-2 h-4 w-4" />
                  Недавние
                </Button>
                <Button variant="ghost" className="justify-start">
                  <Icon name="Star" className="mr-2 h-4 w-4" />
                  Избранное
                </Button>
                <Button variant="ghost" className="justify-start">
                  <Icon name="Trash" className="mr-2 h-4 w-4" />
                  Корзина
                </Button>
              </div>
              <div className="mt-6 border-t pt-4">
                <h3 className="mb-2 text-sm font-semibold">Закладки</h3>
                <div className="flex flex-col space-y-2">
                  <Button variant="ghost" className="justify-start text-sm">
                    <Icon name="Bookmark" className="mr-2 h-4 w-4" />
                    Важная заметка
                  </Button>
                  <Button variant="ghost" className="justify-start text-sm">
                    <Icon name="Bookmark" className="mr-2 h-4 w-4" />
                    Для презентации
                  </Button>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        {/* Основное поле редактора */}
        <main className="flex-1 overflow-auto p-4">
          <div className="mx-auto max-w-3xl">
            <Textarea
              value={text}
              onChange={handleTextChange}
              placeholder="Начните писать..."
              className="min-h-[calc(100vh-180px)] p-4 text-base resize-none border-0 shadow-none focus-visible:ring-0"
              style={{ fontSize: `${fontSize}px` }}
            />
          </div>
        </main>
      </div>

      {/* Статусная строка */}
      <footer className="border-t py-2 px-4 text-sm text-muted-foreground flex items-center">
        <div className="mr-4">
          Символов: {text.length}
        </div>
        <div className="mr-4">
          Слов: {text.trim() ? text.trim().split(/\s+/).length : 0}
        </div>
        <div className="ml-auto">
          UTF-8
        </div>
      </footer>
    </div>
  );
};

export default TextEditor;
