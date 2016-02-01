defmodule Byte.PageController do
  use Byte.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
