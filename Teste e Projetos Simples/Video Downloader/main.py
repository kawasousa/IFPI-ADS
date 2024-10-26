import tkinter as tk
import yt_dlp
from os import startfile, path
import pyperclip
from PIL import Image, ImageTk
import requests
from io import BytesIO
from time import sleep


def CreateImage(window: tk.Tk, url_text = "https://pbs.twimg.com/media/GF2VS6QWAAAueIT.jpg"):
    img_response = requests.get(url_text)
    img = Image.open(BytesIO(img_response.content))
    img = img.resize((200,200))

    if img:
        img_tk = ImageTk.PhotoImage(img)
        img_label = tk.Label(window, image=img_tk)
        img_label.image = img_tk
        img_label.grid(row=5,column=1, padx=5, pady=5, sticky="nsew")

# Baixa o vídeo da url enviada.
def DownloadVideo(url: tk.Entry, window: tk.Tk) -> None:
    url_text = url.get()  # Obtém o texto da entrada

    if url_text:
        ydl_opts = {
            'format': 'best',  # Escolhe a melhor qualidade do vídeo disponível.
            'outtmpl': 'yt_download/%(title)s.%(ext)s'  # Caminho onde o vídeo será salvo.
        }

        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            ydl.download([url_text])
    
    CreateImage(window)
    CreateButton(window)

# Abre o explorador de arquivos na pasta downloads.
def OpenDir(dir_path = 'yt_download') -> None:
    if path.exists(dir_path):
        startfile(dir_path)

# Cola o texto que está na área de transferência.
def PasteText(input: tk.Entry):
    text = pyperclip.paste()
    if text:
        input.delete(0, 100)
        input.insert(0, text)

# Cria o botão de abrir a pasta onde o vídeo é baixado.
def CreateButton(window: tk.Tk, btn_text="Abrir pasta do vídeo"):
    tk_button = tk.Button(window, text=btn_text, command= OpenDir)
    tk_button.grid(row=6,column=1, padx=5, pady=5)

#
def CreateCanvas(window, largura=200, altura=30, borda=2, bg="#0f0f0f", fg="#ebebeb"):
    # Cria o Canvas para desenhar a borda arredondada
    canvas = tk.Canvas(window, width=largura, height=altura, highlightthickness=0)
    
    # Desenha uma borda arredondada usando `create_oval` para os cantos
    canvas.create_oval(borda, borda, altura, altura, fill=fg, outline="")
    canvas.create_oval(largura - altura, borda, largura - borda, altura, fill=fg, outline="")
    canvas.create_rectangle(altura // 2, borda, largura - altura // 2, altura, fill=fg, outline="")

    # Adiciona o campo Entry ao Canvas
    entry = tk.Entry(window, bd=0, bg=bg, fg=fg, highlightthickness=0, relief="flat")
    entry_window = canvas.create_window(largura // 2, altura // 2, window=entry, width=largura - 2 * borda, height=altura - 2 * borda)
    
    # Posiciona o Canvas na janela
    canvas.grid(row=1,column=1, padx=5, pady=5)

    return entry

# Inicializa a janela principal
def CreateWindow() -> tk.Tk:
    tk_window = tk.Tk()
    tk_window.title("Download de vídeo do youtube de grátis")
    tk_window.configure(bg="#212121")

    ## Define as propriedades da janela.
    w_height = 400
    w_width = 500
    tk_window.geometry(f"{w_height}x{w_width}")
    ### Obtém as dimensões da tela
    screen_width = tk_window.winfo_screenwidth()
    screen_height = tk_window.winfo_screenheight()
    ### Calcula as posições x e y para centralizar a janela
    pos_x = (screen_width // 2) - (w_width // 2)
    pos_y = (screen_height // 2) - (w_height // 2)
    ### Define a posição da janela
    tk_window.geometry(f"{w_width}x{w_height}+{pos_x}+{pos_y}")

    ## Cria e posiciona um texto
    tag = tk.Label(
        tk_window,
        text="Video Download",
        fg="white",
        background="#212121",   
        font=("Arial", 16, "bold")
        )
    tag.grid(row=0,column=1, padx=0, pady=0)

    ## Cria o campo de digitação para a url.
    tk_input = CreateCanvas(tk_window)

    tk_paste_button = tk.Button(tk_window, text="Colar da área de transferência", command=lambda: PasteText(tk_input))
    tk_paste_button.grid(row=1,column=2, padx=5, pady=5)

    ## Cria o botão de baixar vídeo.
    tk_button = tk.Button(tk_window, text="Baixar vídeo", command=lambda: DownloadVideo(tk_input, tk_window))
    tk_button.grid(row=3,column=1, padx=5, pady=5)

    return tk_window

def main():
    tk_window = CreateWindow()

    # Mantém a janela aberta.
    tk_window.mainloop()
main()